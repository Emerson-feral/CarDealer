const service = require('../service/vehicleService');

const getAll = async (filters) => await service.getAll(filters);

const createOne = async (payload) => await service.createOne(payload);

const getById = async (id) => {
  const result = await service.getById(id);
  return result;
};

const deleteById = async (id) => {
  const isDeleted = await service.deleteById(id);
  return isDeleted;
};

module.exports = {
  createOne,
  getAll,
  getById,
  deleteById
};
