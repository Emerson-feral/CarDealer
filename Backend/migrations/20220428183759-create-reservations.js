module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      cpfResponsavelReserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'employees',
          key: 'cpf'
        }
      },
      idVeiculoReserva: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'vehicles',
          key: 'id'
        }
      },
      valorReserva: {
        type: Sequelize.DECIMAL,
        allowNull: false
      }
    }, {
      timestamps: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservations');
  }
};
