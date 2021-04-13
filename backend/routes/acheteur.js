const express = require('express');
const router = express.Router();
const users = require('../controllers/acheteur.controller')
// const auth = require('../middleware/auth')



router.post('/add', users.addusers);
router.post('/login', users.loginAcheteur);
// router.get('/all', Admin.getAllAdmins);
router.put('/:id', users.validateacheteur);



module.exports = router;