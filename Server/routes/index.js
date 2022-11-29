const express = require('express');
const bucketRoutes = require('./bucket-routes.js')
const listRoutes = require('./list-routes.js')
const userRoutes = require('./user-routes.js')
const router = express.Router()
router.use('/buckets', bucketRoutes)
router.use('/lists', listRoutes)
router.use('/users', userRoutes)

module.exports = router;