const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config();
const secret = process.env.Token_Secret;
const expiration = '2h';

module.exports = {
   authMiddleware: function ({ req }) {
      let token = req.body.token || req.query.token || req.headers.authorization;

      if (req.headers.authorization) {
         token = token.split(' ').pop().trim();
      }

      if (!token) {
         return req;
      }

      try {
         const { data } = jwt.verify(token, secret, { maxAge: expiration });
         req.user = data;
      } catch {
         console.log('Invalid token');
      }

      return req;
   },
   generateToken: function ({ email, username, _id }) {
      const payload = { email, username, _id };
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
   },
};