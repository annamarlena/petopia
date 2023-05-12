const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Spa extends Model {}

Spa.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false, 
      validate: {isDecimal: true}
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    profileId: {       // associates with the profile model
      type: DataTypes.INTEGER,
      references: {
        model: 'profile',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'spa',
  }
);

module.exports = Spa;
