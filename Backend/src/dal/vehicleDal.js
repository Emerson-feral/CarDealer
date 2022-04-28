const db = require('../model');

const Vehicle = db.vehicle;

const createOne = async (payload) => {
  const vehicle = await Vehicle.create(payload);
  return vehicle;
};

const getAll = async (filters) => Vehicle.findAll({
  limit: (filters.limit),
  offset: (filters.offset),
  where: {
    ...(filters.status && { nome: filters.status })
  }
});

const update = async (id, payload) => {
  const vehicle = await Vehicle.findByPk(id);
  if (!vehicle) {
    throw new Error(`Vehicle ${id} not found`);
  }

  const updateVehicle = await (vehicle).update(payload);
  return updateVehicle;
};

const getById = async (id) => {
  const vehicle = await Vehicle.findByPk(id);
  if (!vehicle) {
    return null;
  }
  return vehicle;
};

const deleteById = async (id) => {
  const deletedVehicleCount = await Vehicle.destroy({
    where: { id }
  });
  return !!deletedVehicleCount;
};

module.exports = {
  createOne,
  getAll,
  update,
  getById,
  deleteById
};
