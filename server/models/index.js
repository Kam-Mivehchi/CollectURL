const Bucket = require('./Bucket.js')
const List = require('./List.js')
const User = require('./User.js')


//Buckets contain lists

//lists contain websites

//schema only no model
//websites are attached to lists not free items

module.exports = { Bucket, List, User }