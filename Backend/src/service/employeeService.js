const employeeDal = require('../dal/employeeDal');

const createOne = async (payload) => {
  if (!payload.cpf) { throw new Error('cpf is required'); }
  if ((await employeeDal.getByCpf(payload.cpf)) != null) throw new Error('cpf is duplicated');
  if (!payload.nome) { throw new Error('nome is required'); }
  if (!payload.email) { throw new Error('email is required'); }
  if (!payload.avatar) { throw new Error('avatar is required'); }
  if (!payload.biografia) { throw new Error('biografia is required'); }
  if (!payload.senha) { throw new Error('senha is required'); }

  return employeeDal.createOne(payload);
};

const getAll = (filters) => employeeDal.getAll(filters);

const update = async (cpf, payload) => {
  if (!cpf) { throw new Error('cpf is required'); }
  if (!payload.nome) { throw new Error('nome is required'); }
  if (!payload.email) { throw new Error('email is required'); }
  if (!payload.avatar) { throw new Error('avatar is required'); }
  if (!payload.biografia) { throw new Error('biografia is required'); }
  if (!payload.senha) { throw new Error('senha is required'); }

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
