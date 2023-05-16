const router = require('express').Router();
const { User, Profile } = require('../../models');
const bcrypt = require("bcrypt")

// router.post('/login', async (req, res) => {
//   try {
//     console.log("login route hit")
//     console.log(req.body)
//     const userData = await User.findAll({
//       where: {
//         email: req.body.email
//       }
//     });
//     console.log(userData)
//     const hash =  await bcrypt.hash(req.body.password, 10)
//     if (hash === userData.password) {
//       console.log("CORRECT PASSWORD")
//       res.status(200).send({msg: "success"})
//     } else {
//       console.log("INCORRECT PASSWORD")
//       res.status(400).send({msg: "failure"})
//     }

//     // req.session.save(() => {
//     //   req.session.user_id = userData.id;
//     //   req.session.logged_in = true;

//     //   res.status(200).json(userData);
//     // });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// router.get('/signup', (req, res) => {
//   console.log("Dummy route hit")
//   res.status(200).send({msg: "test"})
// })

// CREATE a new user
router.post('/signup', (req, res) => {
  console.log("===== SIGNUP FETCH RECEIVED")
  console.log(req.body)
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  .then((user) => {
    res.status(200).send()
  })
  .catch((err) => {
    console.log(err);
    res.status(400).send(err);
  });
});

router.post('/login', async (req, res) => {
  
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
     
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
