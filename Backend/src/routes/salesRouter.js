const router = require('express').Router();
const salesController = require('../controller/salesController');

router.get('/', async (req, res) => {
  const filters = req.query;
  const results = await salesController.getAll(filters);
  return res.status(200).send(results);
});

router.post('/', async (req, res) => {
  const payload = req.body;
  try {
    const result = await salesController.createOne(payload);
    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(`${error}`);
  }
});

module.exports = router;
