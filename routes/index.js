const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");


//basic to render page for handlebars
// router.get("/login", async (req, res) => {
//     res.render('login');
// })

router.use('/api', apiRoutes);
router.use("/", homeRoutes);


module.exports = router;
