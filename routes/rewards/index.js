const express = require('express'); 
const router = express.Router();

router.use('/contracts', require('./contracts'));
router.use('/rewards', require('./rewards'));

console.log('/index.js');
module.exports = router;