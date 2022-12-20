const express = require('express');
const router = express.Router()
const { getAllUserBuckets, newBucket, getBucketById, addListToBucket } = require('../controllers/bucket-controllers')
const { authMiddleware } = require("../utils/auth.js");

//middleware for user authentication want on all the routes
router.use(authMiddleware);
//create bucket & get all buckets

// ('buckets/')
router.route('/')
   .get(getAllUserBuckets)
   .post(newBucket)
// ('buckets/:bucketId')
// get, update(addList,changeName), delete single buckets
// add and remove list from a bucket
router.route('/:bucketId')
   .get(getBucketById)

router.route('/:bucketId/addList/:listId')
   .get(addListToBucket)

module.exports = router;