const router = require('express').Router();

const apiRoutes = require('./api');

//basic to render page for handlebars
router.get("/login", async (req, res) => {
    res.render('login');
})

router.use('/api', apiRoutes);

module.exports = router;
