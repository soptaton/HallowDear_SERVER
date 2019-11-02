const express = require('express'); 
const router = express.Router({mergeParams: true});

router.use('/contracts', require('./contracts'));

console.log('/contract.js');
module.exports = router;