const { authMiddleware, generateToken } = require("../utils/auth.js");
const { User } = require('../models')
const bcrypt = require("bcryptjs");
module.exports = {

   async SignUp(req, res) {
      try {
         req.body.password = await bcrypt.hash(req.body.password, 10)
         const user = await User.create(req.body);
         const token = generateToken(user);



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

         const user = await User.findOne({ email: req.body.email });


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