const { authMiddleware, generateToken } = require("../utils/auth.js");
const { User } = require('../models')

module.exports = {

   async SignUp(req, res) {
      try {
         const { username, email, password } = req.body
         const user = await User.create({ username, email, password });

         const token = generateToken(user);


         res.status(200).json({ token, user })
         // return res
         //    .cookie("access_token", token, {
         //       httpOnly: true,
         //       secure: process.env.NODE_ENV === "production",
         //    })
         //    .status(200)
         //    .json({ message: "Logged in successfully 😊 👌" });
      } catch (err) {
         console.error(err)
         res.status(500).json(err)
      }
   },
   async Login(req, res) {
      try {
         const { username, email, password } = req.body
         const user = await User.findOne({ username });

         const token = generateToken(user);


         res.status(200).json({ token, user })

      } catch (err) {
         console.error(err)
         res.status(500).json(err)
      }
   }


}