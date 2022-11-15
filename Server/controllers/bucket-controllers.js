const { Bucket, List } = require('../models')




module.exports = {

   async getAllBuckets(req, res) {
      try {
         const data = await Bucket.find().populate('lists').select('-__v')
         res.status(200).json(data)

      } catch (err) {
         res.status(500).json(err)

      }
   },
   async newBucket(req, res) {
      try {
         const data = await Bucket.create(req.body)
         res.status(200).json(data)

      } catch (err) {
         res.status(500).json(err)

      }
   },
   async getBucketById(req, res) {
      try {
         const data = await Bucket.findOne({ _id: req.params.bucketId }).populate('lists').select('-__v')
         res.status(200).json(data)

      } catch (err) {
         res.status(500).json(err)

      }
   },
   async addListToBucket(req, res) {
      try {
         const data = await Bucket.findOneAndUpdate(
            { _id: req.params.listId },
            { $addToSet: { lists: req.body } },
            { runValidators: true, new: true }
         )

      } catch (err) {
         res.status(500).json(err)

      }
   }

}