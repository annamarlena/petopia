const User = require('./User');
const Product = require('./Product');
const Pet = require('./Pet')
const Reservation = require('./Reservation')
const Spa = require('./Spa')
const Hotel = require('./Hotel')

Pet.belongsTo(User, {
  foreignKey: 'userId'
})

Reservation.belongsTo(Pet, {
  foreignKey: 'petId'
})

module.exports = { User, Pet, Product, Reservation, Hotel, Spa };
