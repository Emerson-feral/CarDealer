const router = require('express').Router();
const employeeController = require('../controller/employeeController');

// eslint-disable-next-line consistent-return
router.post('/', async (req, res) => {
  const payload = req.body;
  try {
    const result = await employeeController.createOne(payload);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(`${error}`);
  }
});

router.get('/', async (req, res) => {
  const filters = req.query;
  const results = await employeeController.getAll(filters);
  return res.status(200).send(results);
});

router.get('/:cpf', async (req, res) => {
  const { cpf } = req.params;
  const result = await employeeController.getByCpf(cpf);
  if (result) {
    return res.status(200).send(result);
  }
  return res.status(404).send();
});

router.put('/:cpf', async (req, res) => {
  const { cpf } = req.params;
  const payload = req.body;

  try {
    await employeeController.update(cpf, payload);
    return res.status(200).send();
  } catch (error) {
    return res.status(400).send(`${error}`);
  }
});

router.delete('/:cpf', async (req, res) => {
  const { cpf } = req.params;
  await employeeController.deleteByCpf(cpf);
  return res.status(204).send();
});

module.exports = router;
