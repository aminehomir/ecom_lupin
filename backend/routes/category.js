const express = require('express');
const router = express.Router();
const Category = require('../controllers/category.controller')




router.post('/add',  Category.addCategory);

router.get('/all', Category.getAllCategory);


module.exports = router;