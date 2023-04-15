const { Schema, Types } = require('mongoose');


const itemSchema = new Schema(
   {
      itemId: {
         type: Schema.Types.ObjectId,
         default: () => new Types.ObjectId()
      },
      itemName: {
         type: String,
         // required: true,
         default: "Site Not Found"

      },
      url: {
         type: String,
         required: true,

      },
      img: {
         type: String,
         // required: true,
         default: "https://via.placeholder.com/150"

      },
      description: {
         type: String,
         default: "Sorry our API doesn't currently support all features for that url, we are working to expand our coverage of sites. In the meanwhile try something else"

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