const reservationDal = require('../dal/reservationDal');
const employeeService = require('./employeeService');
const vehicleService = require('./vehicleService');
const vehicleStatus = require('../model/vehicleStatus');

const getAll = (filters) => reservationDal.getAll(filters);

const createOne = async (payload) => {
  if (!payload.cpfResponsavelReserva) { throw new Error('cpfResponsavelReserva is required'); }
  if ((await employeeService.getByCpf(payload.cpfResponsavelReserva)) == null) { throw new Error('cpfResponsavelReserva is invalid'); }
  if (!payload.idVeiculoReserva) { throw new Error('idVeiculoReserva is required'); }
  const vehicle = await vehicleService.getById(payload.idVeiculoReserva);
  if (vehicle == null || vehicle.status !== vehicleStatus.DISPONIVEL) throw new Error('idVeiculoReserva is invalid');
  if (!payload.valorReserva) throw new Error('valorReserva is required');

  const vehicleUpdate = vehicle;
  vehicleUpdate.status = vehicleStatus.RESERVADO;
  await vehicleService.update(payload.idVeiculoReserva, vehicleUpdate.dataValues);

  payload.data = new Date();
  return reservationDal.createOne(payload);
};

module.exports = {
  createOne,
  getAll
};
