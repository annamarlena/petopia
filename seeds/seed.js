const sequelize = require('../config/connection');
const { User, Hotel, Pet, Product, Spa, Reservation } = require('../models');

const userData = require('./userData.json');
const petData = require('./petData.json');
const spaData = require('./spaData.json');
const hotelData = require('./hotelData.json');
const reservationData = require('./reservationData.json')
const productData = require('./productData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Pet.bulkCreate(petData);
  await Hotel.bulkCreate(hotelData);
  await Spa.bulkCreate(spaData);
  await Reservation.bulkCreate(reservationData);
  await Product.bulkCreate(productData);
  

  process.exit(0);
};

seedDatabase();