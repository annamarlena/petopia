// For future expansion of this project
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservation extends Model {}

Reservation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: new Date()
    },
    hotelId: {    
      type: DataTypes.INTEGER,  
      references: {
        model: 'Hotel',
        key: 'id',
      },
    },
    spaId: {    
      type: DataTypes.INTEGER,  
      references: {
        model: 'Spa',
        key: 'id',
      },
    },
    petId: {   
      type: DataTypes.INTEGER,  
      references: {
        model: 'Pet',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Reservation',
  }
);

module.exports = Reservation;