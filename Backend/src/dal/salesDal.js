const db = require('../model');

const Sales = db.sales;

const createOne = async (payload) => {
  const sales = await Sales.create(payload);
  return sales;
};

const getAll = async (filters) => Sales.findAll({
  limit: (filters.limit),
  offset: (filters.offset),
  where: {
    ...(filters.cpfResponsavelVenda && { cpfResponsavelVenda: filters.cpfResponsavelVenda })
  }
});

module.exports = {
  createOne,
  getAll

};
