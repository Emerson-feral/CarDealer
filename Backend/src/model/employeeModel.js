module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('employees', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    cpf: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING
    },
    biografia: {
      type: DataTypes.TEXT
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  return Employee;
};
