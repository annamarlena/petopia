const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createAcctRoutes = require('./createAcctRoutes');
const hotelRoutes = require('./hotelRoutes');
const petRoutes = require('./petRoutes');
const productRoutes = require('./productRoutes');
const profileRoutes = require('./profileRoutes');
const spaRoutes = require('./spaRoutes');

// make a router for each of the routes
router.use('/users', userRoutes);
router.use("/createAccts", createAcctRoutes );
router.use('/hotels', hotelRoutes);
router.use('/pets', petRoutes);
router.use('/products', productRoutes);
router.use('/profile', profileRoutes);
router.use('/spas', spaRoutes);

module.exports = router;
