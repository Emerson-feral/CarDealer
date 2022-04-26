/* eslint-disable no-underscore-dangle */
const debug = require('debug')('server:employeeController');
const Employee = require('../model/employeeModel');

function employeeController() {
  async function getAll(req, res) {
    const employees = await Employee.find();
    res.json(employees);
  }

  async function createOne(req, res) {
    const newEmployee = new Employee(req.body);
    debug(newEmployee);
    try {
      await newEmployee.save();
      res.json(newEmployee);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const employeeById = await Employee.findById(
        req.params.employeeId
      );
      res.json(employeeById);
    } catch (error) {
      debug(error);
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.pokemonId,
        req.body,
        { new: true }
      );
      res.json(updatedEmployee);
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Employee.findByIdAndDelete(req.params.employeeId);
      res.status(204);
      res.json();
    } catch (error) {
      debug(error);
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById
  };
}

module.exports = employeeController;
