const sequelize = require('../config/connection');
const { User, Profile, CreateAcctData, Hotel, Pet, Product, Spa } = require('../models');

const userData = require('./userData.json');
const createAcctData = require('./createAcctData.json');
const profileData = require('./profileData.json');
const petData = require('./petData.json');
const spaData = require('./spaData.json');
const hotelData = require('./hotelData.json');
const productData = require('./productData.json'); //needs to be changed still to match other data and tables


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const profile of profileData) {
    await profile.create({
      ...profile,
      profileId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
