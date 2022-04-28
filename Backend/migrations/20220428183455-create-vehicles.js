module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelo: {
        type: Sequelize.STRING,
        allowNull: false

      },
      ano: {
        type: Sequelize.INTEGER,

        allowNull: false
      },
      km: {
        type: Sequelize.INTEGER,

        allowNull: false
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      chassi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      precoCompra: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      timestamps: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicles');
  }
};
