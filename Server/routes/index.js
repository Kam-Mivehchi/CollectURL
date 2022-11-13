const express = require('express');
const bucketRoutes = require('./bucket-routes.js')
const listRoutes = require('./list-routes.js')
const router = express.Router()
router.use('/buckets', bucketRoutes)
router.use('/lists', listRoutes)

module.exports = router;