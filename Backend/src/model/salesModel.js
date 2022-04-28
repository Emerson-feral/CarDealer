module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('sales', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false
    },
    cpfResponsavelVenda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'cpf'
      }
    },
    idVeiculoVenda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehicles',
        key: 'id'
      }
    },
    valorVenda: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    timestamps: false
  });

  return Sales;
};
