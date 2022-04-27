const employeeDal = require('../dal/employeeDal');

const createOne = async (payload) => {
  if (!payload.avatar) throw new Error('avatar is required');

  return employeeDal.createOne(payload);
};

const getAll = (filters) => employeeDal.getAll(filters);

const update = async (cpf, payload) => {
  if (!cpf) throw new Error('cpf is required');
  if (!payload.nome) throw new Error('nome is required');

  return employeeDal.update(cpf, payload);
};

const getByCpf = (cpf) => employeeDal.getByCpf(cpf);

const deleteByCpf = (cpf) => employeeDal.deleteByCpf(cpf);

module.exports = {
  createOne,
  getAll,
  update,
  getByCpf,
  deleteByCpf
};
