const express = require('express');
const router = express.Router();
const Users = require('../controllers/users.controller')
// const auth = require('../middleware/auth')



router.post('/add',  Users.addUsers);
// router.post('/login', Admin.loginAdmin);
// router.get('/all', Admin.getAllAdmins);
// router.put('/:id', Admin.validate);



module.exports = router;