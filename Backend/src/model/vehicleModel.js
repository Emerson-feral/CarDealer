module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('vehicle', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false

    },
    ano: {
      type: DataTypes.INTEGER,

      allowNull: false
    },
    km: {
      type: DataTypes.INTEGER,

      allowNull: false
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chassi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precoCompra: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {

    timestamps: false
  });

  return Vehicle;
};
