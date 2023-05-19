const router = require('express').Router();
const { Product } = require('../../models');

// GET all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll();
    res.status(200).json(productData);
    console.log(productData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;