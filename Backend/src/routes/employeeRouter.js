const { Router } = require('express');
const employeeController = require('../controller/employeeController')();

function employeeRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(employeeController.getAll)
    .post(employeeController.createOne);

  routes
    .route('/:employeeId')
    .get(employeeController.getById)
    .put(employeeController.updateById)
    .delete(employeeController.deleteById);

  return routes;
}

module.exports = employeeRouter();
