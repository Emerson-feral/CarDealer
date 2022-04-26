const router = require('express').Router();
const employeeController = require('../controller/employeeController');

router.post('/', employeeController.createOne);
router.get('/', employeeController.getAll);

router.get('/:id', employeeController.getById);
router.put('/:id', employeeController.updateById);
router.delete('/:id', employeeController.deleteById);

module.exports = router;
