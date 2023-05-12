const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createdAcctId: {    // associates with the create account model
      type: DataTypes.INTEGER,
      references: {
      model: "createacct",
      key: "id"
      }
    },
    petId: {         // associates with the pet model
      type: DataTypes.INTEGER,
      references: {
        model: 'pet',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile',
  }
);

module.exports = Profile;
