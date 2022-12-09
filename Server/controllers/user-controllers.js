const { authMiddleware, generateToken } = require("../utils/auth.js");
const { User, Bucket, List } = require('../models')
const bcrypt = require("bcryptjs");
module.exports = {

   async SignUp(req, res) {
      try {
         req.body.password = await bcrypt.hash(req.body.password, 10)
         let createUser = await User.create(req.body);
         const token = generateToken(createUser);
         let def = await Bucket.create({
            bucketName: "Free Thoughts",
            bucketDescription: "Unnassociated Thoughts Live Here",
            user: createUser._id
         })
         //add free thought bucket
         await User.findOneAndUpdate(
            { _id: createUser._id },
            { $addToSet: { buckets: def } },
            { runValidators: true, new: true }
         )
         //create local list
         console.log(req.body.list)
         const data = await List.create({ ...req.body.list, user: createUser._id })
         //add that list to the freethough bucket
         await Bucket.findOneAndUpdate({ bucketName: data.bucket, user: createUser._id },
            { $addToSet: { lists: data._id } },
            { runValidators: true, new: true }
         )
         await User.findOneAndUpdate(
            { _id: createUser._id },
            { $addToSet: { lists: data._id } },
            { runValidators: true, new: true }
         )

         await User.findOneAndUpdate(
            { _id: createUser._id },
            { $addToSet: { listss: def } },
            { runValidators: true, new: true }
         )
         //return fully populated user
         const user = await User.findOne({ _id: createUser._id }).populate("buckets").populate('lists');
         return res
            .cookie("access_token", token, {
               httpOnly: true,
               secure: process.env.NODE_ENV === "production",
            })
            .status(200)
            .json({ token, user });
      } catch (err) {
         console.error(err)
         res.status(500).json(err)
      }
   },
   async Login(req, res) {
      try {

         const user = await User.findOne({ email: req.body.email }).populate('buckets').populate('lists');


         if (user) {
            //check if password matches
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
               // sign token and send it in response
               const token = generateToken(user);
               res.json({ token, user });
            } else {
               res.status(400).json({ error: "password doesn't match" });
            }
         } else {
            res.status(400).json({ error: "User doesn't exist" });
         }


      } catch (err) {
         console.error(err)
         res.status(500).json(err)
      }
   }


}