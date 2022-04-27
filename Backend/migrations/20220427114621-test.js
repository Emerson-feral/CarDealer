module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'employees',
      'telefone',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employees', 'telefone');
  }
};
