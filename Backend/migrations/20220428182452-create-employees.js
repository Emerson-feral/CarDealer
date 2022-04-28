module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      cpf: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      avatar: {
        type: Sequelize.STRING
      },
      biografia: {
        type: Sequelize.TEXT
      },
      senha: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      timestamps: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};
