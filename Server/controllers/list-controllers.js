const { Bucket, List } = require('../models')




module.exports = {

   async getAllLists(req, res) {
      try {
         const data = await List.find().select('-__v')
         res.status(200).json(data)

      } catch (err) {
         res.status(500).json(err)

      }
   },
   async newList(req, res) {
      try {
         const data = await List.create(req.body)
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
         const data = await List.findOneAndUpdate(
            { _id: req.params.listId },
            { $addToSet: { listItems: req.body } },
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
   }
}

