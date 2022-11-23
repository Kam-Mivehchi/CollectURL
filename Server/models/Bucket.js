const { Schema, model } = require('mongoose');

const bucketSchema = new Schema(
   {
      bucketName: {
         type: String,
         required: true,
         unique: true,
         trim: true
      },
      bucketDescription: {
         type: String,
         // required: true,
         minLength: 1,
         maxLength: 280,
      },
      createdBy: {
         type: String,
         // required: true,
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