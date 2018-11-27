const express = require('express');
const router  = express.Router();

// /* GET home page */
// router.get('/', (req, res, next) => {
//   // res.render('index');
//   res.redirect('/borrar');
// });


const meetupsRoutes = require('../routes/meetups');
router.use('/meetups', meetupsRoutes);
      

module.exports = router;
