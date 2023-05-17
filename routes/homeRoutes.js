const router = require('express').Router();
const { Profile, User, Spa, Hotel, Pet, Product } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  res.render("landingpage")
})

router.get('/login', async (req, res) => {
  res.render("login")
})

router.get("/profile", withAuth, async (req, res) => {
  const user = await User.findByPk(req.session.user_id)
  const pets = await Pet.findByPk(req.session.user_id)
  const serialUser = user.get({plain: true})
  res.render("profile", { user: serialUser, pets: serialUser })
})

router.get('/spas', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const spaData = await Spa.findAll({});
    // Serialize data so the template can read it
    const spas = spaData.map((spa) => spa.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('spas', {
      spas,

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/hotels', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const hotelData = await Hotel.findAll({});
    // Serialize data so the template can read it
    const hotels = hotelData.map((hotel) => hotel.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('hotels', {
      hotels
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const productData = await Product.findAll({});
    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('products', {
      products
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
