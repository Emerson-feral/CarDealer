module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('employees', 'id');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('employees', 'id', {
      type: Sequelize.INTEGER
    });
  }
};
