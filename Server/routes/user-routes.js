const express = require('express');
const router = express.Router()
const { SignUp, Login } = require('../controllers/user-controllers')
// ('Lists/')
//create List & get all Lists
router.route('/register')
   .post(SignUp)
router.route('/login')
   .post(Login)

module.exports = router;