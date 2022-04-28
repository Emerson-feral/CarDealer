const service = require('../service/salesService');

const getAll = async (filters) => await service.getAll(filters);

const createOne = async (payload) => await service.createOne(payload);

module.exports = {
  createOne,
  getAll
};
