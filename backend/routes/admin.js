const express = require('express');
const router = express.Router();
const Admin = require('../controllers/admin.controller')
const auth = require('../middleware/auth')



router.post('/add/',  auth , Admin.addAdmin);
router.post('/login', Admin.loginAdmin);
router.get('/all', Admin.getAllAdmins);
router.put('/:id', Admin.validate);



module.exports = router;