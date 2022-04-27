const service = require('../service/employeeService');

const createOne = async (payload) => await service.createOne(payload);

const getAll = async (filters) => await service.getAll(filters);

const getByCpf = async (cpf) => {
  const result = await service.getByCpf(cpf);
  return result;
};

const update = async (cpf, payload) => { await service.update(cpf, payload); };

const deleteByCpf = async (cpf) => {
  const isDeleted = await service.deleteByCpf(cpf);
  return isDeleted;
};

module.exports = {
  createOne,
  getAll,
  getByCpf,
  update,
  deleteByCpf
};
