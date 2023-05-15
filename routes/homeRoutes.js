const router = require('express').Router();
const { Profile, User, Spa } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const profileData = await Profile.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const projects = projectData.map((project) => project.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       projects, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  res.render("landingpage")
})

router.get("/login", async (req, res) => {
  res.render("login")
})

router.get("/profile", async (req, res) => {
  const user = await User.findByPk(req.session)
  res.render("profile", { user })
})

router.get('/spas', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const spaData = await Spa.findAll({});
    // Serialize data so the template can read it
    const spas = spaData.map((spa) => spa.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('spas', {
      spas
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

router.get('products', async (req, res) => {
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

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
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
