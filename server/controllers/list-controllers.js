const { Bucket, List } = require('../models')
const axios = require('axios')



module.exports = {

   async getAllLists(req, res) {
      try {
         const data = await List.find({ user: req.user._id }).select('-__v')
         res.status(200).json(data)

      } catch (err) {
         res.status(500).json(err)

      }
   },
   async newList(req, res) {
      try {
         const data = await List.create({ ...req.body, user: req.user._id })
         await Bucket.findOneAndUpdate({ bucketName: data.bucket, user: req.user._id },
            { $addToSet: { lists: data._id } },
            { runValidators: true, new: true }
         )

         res.status(200).json(data)

      } catch (err) {

         res.status(500).json(err)

      }
   },
   async getListById(req, res) {
      try {
         const data = await List.findOne({ _id: req.params.listId }).populate('listItems').select('-__v')
         res.status(200).json(data)

      } catch (err) {
         res.status(500).json(err)

      }
   },
   async getListItems(req, res) {
      try {
         const data = await List.findOne({ _id: req.params.listId },).populate('listItems').select('-__v')
         res.status(200).json(data)


      } catch (err) {
         res.status(500).json(err)

      }
   },
   async newListItem(req, res) {
      try {
         //call metadata API 

         let metadata = await axios.get(`https://api.urlmeta.org/?url=${req.body.url}`, {
            headers: {
               Authorization: `${process.env.METADATA_API_KEY}`
            }
         })


         const { title, site, description } = metadata.data.meta
         //add the apidata to the list
         const data = await List.findOneAndUpdate(
            { _id: req.params.listId },
            {
               $addToSet: {
                  listItems: {
                     itemName: title || site.name,
                     url: req.body.url,
                     img: site.logo || site.favicon || "https://via.placeholder.com/150",
                     description: description
                  }
               }
            },
            { runValidators: true, new: true }
         )

         res.status(200).json(data)


      } catch (err) {
         res.status(500).json(err)

      }
   },
   async removeListItem(req, res) {
      try {
         const data = await List.findOneAndUpdate(
            { _id: req.params.listId },
            { $pull: { listItems: { _id: req.params.itemId } } },
            { runValidators: true, new: true }
         )

         res.status(200).json(data)


      } catch (err) {
         res.status(500).json(err)

      }
   },

   async removeList(req, res) {
      try {
         const data = await List.findOneAndDelete(
            { _id: req.params.listId },

         )

         res.status(200).json(data)


      } catch (err) {
         res.status(500).json(err)

      }
   },
   async updateList(req, res) {
      try {
         const data = await List.findOneAndUpdate(
            { _id: req.params.listId },
            { $set: req.body },
            { runValidators: true, new: true }
         )

         res.status(200).json(data)


      } catch (err) {
         res.status(500).json(err)

      }
   }
}

