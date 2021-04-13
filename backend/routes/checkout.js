const express = require('express');
const router = express.Router();
const check = require('../controllers/checkout.controller')
// const auth = require('../middleware/auth')



router.post('/checkout',  check.createcheckout);

// router.get('/', check.getcheckout);
// router.put('/:id', Admin.validate);



module.exports = router;