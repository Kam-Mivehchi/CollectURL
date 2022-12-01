const express = require('express');
const router = express.Router()
const { getAllUserBuckets, newBucket, getBucketById } = require('../controllers/bucket-controllers')
const { authMiddleware } = require("../utils/auth.js");

// ('buckets/')
//create bucket & get all buckets
router.use(authMiddleware);
router.route('/')
   .get(getAllUserBuckets)
   .post(newBucket)
// ('buckets/:bucketId')
// get, update(addList,changeName), delete single buckets
// add and remove list from a bucket
router.route('/:bucketId')
   .get(getBucketById)
module.exports = router;