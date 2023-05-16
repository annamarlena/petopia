const router = require('express').Router();
const { Profile, User, Pet } = require('../../models');

// GET one profile
router.get('/:id', async (req, res) => {
    try {
      const profileData = await Profile.findByPk(req.params.id, {
          include: [ { model: User}, {model: Pet} ]
       }
     );
      if (!profileData) {
        res.status(404).json({ message: "No profile found with this id!" });
        return;
      }
      res.status(200).json(profileData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// UPDATE a profile
router.put('/:id', (req, res) => {
    // update profile data
    Profile.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
  });

module.exports = router;
