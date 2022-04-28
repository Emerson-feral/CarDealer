const db = require('../model');

const Reservation = db.reservation;

const createOne = async (payload) => {
  const reservation = await Reservation.create(payload);
  return reservation;
};

const getAll = async (filters) => Reservation.findAll({
  limit: (filters.limit),
  offset: (filters.offset),
  where: {
    ...(filters.cpfResponsavelReserva && { cpfResponsavelReserva: filters.cpfResponsavelReserva })
  }
});

module.exports = {
  createOne,
  getAll
};
