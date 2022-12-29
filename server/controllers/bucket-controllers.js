const { Bucket } = require('../models')




module.exports = {

   async getAllUserBuckets(req, res) {
      try {

         const data = await Bucket.find({ user: req.user._id }).populate('lists').select('-__v')
         res.status(200).json(data)

      } catch (err) {

         res.status(500).json(err)

      }
   },
   async newBucket(req, res) {
      try {
         const data = await Bucket.create({ ...req.body, user: req.user._id })
         res.status(200).json(data)

      } catch (err) {

         res.status(500).json(err)

      }
   },
   async getBucketById(req, res) {
      try {
         const data = await Bucket.findOne({ _id: req.params.bucketId, user: req.user._id }).populate('lists').select('-__v')
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
         res.status(200).json(data)

      } catch (err) {
         res.status(500).json(err)

      }
   }

}