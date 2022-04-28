const service = require('../service/reservationService');

const getAll = async (filters) => await service.getAll(filters);

const createOne = async (payload) => await service.createOne(payload);

module.exports = {
  getAll,
  createOne
};
