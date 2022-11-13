const { Schema, Types } = require('mongoose');


const itemSchema = new Schema(
   {
      itemId: {
         type: Schema.Types.ObjectId,
         default: () => new Types.ObjectId()
      },
      itemName: {
         type: String,
         required: true,
      },
      url: {
         type: String,
         // required: true,

      },
      img: {
         type: String,
         // required: true,
      },
      description: {
         type: String,
      },
      tasks: {
         type: Array,
         of: String
      },
      createdAt: {
         type: Date,
         default: Date.now,
         // get: timestamp => dateFormat(timestamp)
      }
   },
   {
      toJSON: {
         getters: true
      },
      id: false
   }
);

module.exports = itemSchema;