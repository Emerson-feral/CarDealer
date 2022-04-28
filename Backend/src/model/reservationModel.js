module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('reservations', {
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
    cpfResponsavelReserva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'cpf'
      }
    },
    idVeiculoReserva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'vehicles',
        key: 'id'
      }
    },
    valorReserva: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }

  }, {
    timestamps: false
  });

  return Reservation;
};
