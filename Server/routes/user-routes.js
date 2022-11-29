const express = require('express');
const router = express.Router()
const { SignUp } = require('../controllers/user-controllers')
// ('Lists/')
//create List & get all Lists
router.route('/')
   .post(SignUp)

module.exports = router;