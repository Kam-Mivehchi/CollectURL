const { Schema, model } = require('mongoose');
const userSchema = new Schema(
   {
      username: {
         type: String,
         required: true,
         unique: true,
         trim: true
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,

      },

      createdAt: {
         type: Date,
         default: Date.now,
      },
      lists: [{
         type: Schema.Types.ObjectId,
         ref: 'List'
      }],
      buckets: [{
         type: Schema.Types.ObjectId,
         ref: 'Bucket'
      }]
   },
   {
      toJSON: {
         getters: true
      },

   })

module.exports = model('User', userSchema);