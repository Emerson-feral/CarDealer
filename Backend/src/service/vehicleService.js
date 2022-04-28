const vehicleDal = require('../dal/vehicleDal');

const getAll = (filters) => vehicleDal.getAll(filters);

const createOne = async (payload) => {
  if (!payload.marca) { throw new Error('Marca is required'); }
  if (!payload.ano) { throw new Error('Ano is required'); }
  if (!payload.km) { throw new Error('Km is required'); }
  if (!payload.cor) { throw new Error('Cor is required'); }
  if (!payload.chassi) { throw new Error('Chassi is required'); }
  if (!payload.precoCompra) { throw new Error('PrecoCompra is required'); }

  return vehicleDal.createOne(payload);
};

const update = async (id, payload) => {
  if (!id) { throw new Error('Id is required'); }
  if (!payload.marca) { throw new Error('Marca is required'); }
  if (!payload.ano) { throw new Error('Ano is required'); }
  if (!payload.km) { throw new Error('Km is required'); }
  if (!payload.cor) { throw new Error('Cor is required'); }
  if (!payload.chassi) { throw new Error('Chassi is required'); }
  if (!payload.precoCompra) { throw new Error('PrecoCompra is required'); }

  return vehicleDal.update(id, payload);
};

const getById = (id) => vehicleDal.getById(id);

const deleteById = (id) => vehicleDal.deleteById(id);

module.exports = {
  createOne,
  getAll,
  update,
  getById,
  deleteById
};
