const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config();
const secret = process.env.TokenSecret;
const expiration = '2h';

module.exports = {
   authMiddleware: async function (req, res, next) {
      try {
         // check if auth header exists
         if (req.headers.authorization) {
            // parse token from header
            const token = req.headers.authorization.split(" ")[1]; //split the header and get the token
            if (token) {
               const payload = await jwt.verify(token, process.env.TokenSecret);
               if (payload) {
                  // store user data in request object
                  req.user = payload.data;
                  next();
               } else {
                  res.status(400).json({ error: "token verification failed" });
               }
            } else {
               res.status(400).json({ error: "malformed auth header" });
            }
         } else {
            res.status(400).json({ error: "No authorization header" });
         }
      } catch (error) {
         // console.log(error) 
         res.status(400).json({ error });
      }
   },
   generateToken: function ({ email, username, _id }) {
      const payload = { email, username, _id };
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
   },
};