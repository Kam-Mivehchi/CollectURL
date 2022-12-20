const { Schema, model } = require('mongoose');

const bucketSchema = new Schema(
   {
      bucketName: {
         type: String,
         required: true,
         trim: true
      },
      bucketDescription: {
         type: String,
         // required: true,
         minLength: 1,
         maxLength: 280,
      },
      user: {
         type: Schema.Types.ObjectId,
         ref: 'User',
         required: true
         // default: "New User"
      },
      createdAt: {
         type: Date,
         default: Date.now,
      },
      lists: [{
         type: Schema.Types.ObjectId,
         ref: 'List'
      }]
   },
   {
      toJSON: {
         getters: true
      },

   })

module.exports = model('Bucket', bucketSchema);