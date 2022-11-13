const express = require('express');
const router = express.Router()
const { getAllBuckets, newBucket, getBucketById } = require('../controllers/bucket-controllers')
// ('buckets/')
//create bucket & get all buckets
router.route('/')
   .get(getAllBuckets)
   .post(newBucket)
// ('buckets/:bucketId')
// get, update(addList,changeName), delete single buckets
// add and remove list from a bucket
router.route('/:bucketId')
   .get(getBucketById)
module.exports = router;