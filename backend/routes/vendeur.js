const express = require('express');
const router = express.Router();
const users = require('../controllers/vendeur.controller')
// const auth = require('../middleware/auth')



router.post('/add',   users.addusers);
router.post('/login', users.loginVendeur);
router.get('/all', users.getAllvendeur);
router.put('/:id', users.validatevendeur);
router.put('/pass/:id', users.newpass);


module.exports = router;