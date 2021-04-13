const express = require('express');
const router = express.Router();
const Order = require('../controllers/order.controller')
// const auth = require('../middleware/auth')




// router.post('/login', Admin.loginAdmin);
router.get('/all', Order.getAllOrders);
router.put('/:id', Order.validateOrder);



module.exports = router;