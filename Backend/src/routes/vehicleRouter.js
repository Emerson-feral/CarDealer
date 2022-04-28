const router = require('express').Router();
const vehicleController = require('../controller/vehicleController');

router.get('/', async (req, res) => {
  const filters = req.query;
  const results = await vehicleController.getAll(filters);
  return res.status(200).send(results);
});

router.post('/', async (req, res) => {
  const payload = req.body;
  try {
    const result = await vehicleController.createOne(payload);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(`${error}`);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await vehicleController.getById(id);
  if (result) {
    return res.status(200).send(result);
  }
  return res.status(404).send();
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await vehicleController.deleteById(id);
  return res.status(204).send();
});

module.exports = router;
