const Users = require('../models/Users');
const jwt = require("jsonwebtoken");

// middleware function
// Checks that the token is the same

exports.isAuth = async (req, res, next) => {

    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        
      try {
        const decode = jwt.verify(token, process.env.TOKEN_SECRET);

        const user = await Users.findById(decode.userId);
        if (!user) {
          return res.json({ success: false, message: 'unauthorized access!' });
        }
  
        req.user = user;
        next();
      } catch (error) {
        if (error.name === 'JsonWebTokenError') {
          return res.json({ success: false, message: 'unauthorized access!' });
        }
        if (error.name === 'TokenExpiredError') {
          return res.json({
            success: false,
            message: 'sesson expired try sign in!',
          });
        }
  
        res.res.json({ success: false, message: 'Internal server error!' });
      }
    } else {
      res.json({ success: false, message: 'unauthorized access!' });
    }
  };