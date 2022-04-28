const salesdal = require('../dal/salesDal');
const employeeService = require('./employeeService');
const vehicleService = require('./vehicleService');
const vehicleStatus = require('../model/vehicleStatus');

const getAll = (filters) => salesdal.getAll(filters);

const createOne = async (payload) => {
  if (!payload.cpfResponsavelVenda) { throw new Error('cpfResponsavelVenda is required'); }
  if ((await employeeService.getByCpf(payload.cpfResponsavelVenda)) == null) { throw new Error('cpfResponsavelVenda is invalid'); }
  if (!payload.idVeiculoVenda) { throw new Error('idVeiculoVenda is required'); }
  const vehicle = await vehicleService.getById(payload.idVeiculoVenda);
  if (vehicle == null || vehicle.status.toUpperCase() === vehicleStatus.VENDIDO) { throw new Error('idVeiculoVenda is invalid'); }
  if (!payload.valorVenda) { throw new Error('valorVenda is required'); }

  const vehicleUpdate = vehicle;
  vehicleUpdate.status = vehicleStatus.VENDIDO;

  await vehicleService.update(vehicleUpdate.id, vehicleUpdate.dataValues);

  payload.data = new Date();

  return salesdal.createOne(payload);
};

module.exports = {
  createOne,
  getAll
};
