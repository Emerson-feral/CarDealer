const db = require('../model');

const Employee = db.employees;

const createOne = async (payload) => {
  const employee = await Employee.create(payload);
  return employee;
};

const getAll = async (filters) => Employee.findAll({
  limit: (filters.limit),
  offset: (filters.offset),
  where: {
    ...(filters.nome && { nome: filters.nome })
  }
});

const update = async (cpf, payload) => {
  const employee = await Employee.findByPk(cpf);
  if (!employee) {
    throw new Error(`Employee ${cpf} not found`);
  }

  const updateEmployee = await (employee).update(payload);
  return updateEmployee;
};

const getByCpf = async (cpf) => {
  const employee = await Employee.findByPk(cpf);
  if (!employee) {
    return null;
  }
  return employee;
};

const deleteByCpf = async (cpf) => {
  const deletedEmployeeCount = await Employee.destroy({
    where: { cpf }
  });
  return !!deletedEmployeeCount;
};

module.exports = {
  createOne,
  getAll,
  update,
  getByCpf,
  deleteByCpf
};
