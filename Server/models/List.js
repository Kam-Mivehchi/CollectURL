const { Schema, model } = require('mongoose');
const itemSchema = require('./Item.js')
const listSchema = new Schema(
   {
      listName: {
         type: String,
         required: true,
         minLength: 1,
         maxLength: 280,
      },
      createdAt: {
         type: Date,
         default: Date.now,
      },
      createdBy: {
         type: String,
         default: "Local User"
         // required: true,
      },
      listItems: [itemSchema]
   },
   {
      toJSON: {
         getters: true
      },
      id: false
   }
)

module.exports = model('List', listSchema);