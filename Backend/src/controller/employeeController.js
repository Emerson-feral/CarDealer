const db = require('../model');

const Employee = db.employees;

const createOne = async (req, res) => {
  try {
    const info = {
      nome: req.body.nome,
      email: req.body.email,
      CPF: req.body.CPF,
      avatar: req.body.avatar,
      bio: req.body.bio,
      senha: req.body.senha
    };

    const employee = await Employee.create(info);
    res.status(200).send(employee);
  } catch (error) {
    res.send(error);
  }
};

const getAll = async (req, res) => {
  const employees = await Employee.findAll({});
  res.status(200).send(employees);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findOne({ where: { id } });
  res.status(200).send(employee);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.update(req.body, { where: { id } });
  res.status(200).send(employee);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await Employee.destroy({ where: { id } });
  res.status(200).send(`Employee with id:${id} removed`);
};

module.exports = {
  createOne,
  getAll,
  getById,
  updateById,
  deleteById
};
