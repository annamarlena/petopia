const router = require('express').Router();
const { Pet, Profile } = require('../../models');

// CREATE a new pet
router.post('/', (req, res) => {
    Pet.create({
      name: req.body.name,
      image: req.body.image,
      profileId: req.body.profileId 
    })
  });

// GET one Pet
router.get('/:id', async (req, res) => {
    try {
      const petData = await Pet.findByPk(req.params.id, {
        include: [{ model: Profile}, {model: Pet} ]
     });
      if (!petData) {
        res.status(404).json({ message: "No pet found with this id!" });
        return;
      }
      res.status(200).json(petData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
