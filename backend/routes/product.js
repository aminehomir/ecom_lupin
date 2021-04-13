const express = require('express');
const router = express.Router();
const Product = require('../controllers/product.controller')
const auth = require('../middleware/auth')



router.post('/add',  auth , Product.addProduct);
// router.post('/login', Admin.loginAdmin);
router.get('/all', Product.getAllproduct);
router.get('/:id', Product.getproduct);
router.put('/:id', Product.updateproduct);


router.delete("/delete/:id",Product.deleteproduct);



module.exports = router;