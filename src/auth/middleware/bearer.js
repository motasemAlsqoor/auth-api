'use strict';

const users = require('../models/users.js')

module.exports = async (req, res, next) => {

  try {
    if (!req.headers.authorization) res.status(403).send('Invalid Login');
    const token = req.headers.authorization.split(' ').pop();
    
    const validUser = await users.authenticateWithToken(token);
    req.user = validUser;
    req.token = token;
    next();

  } catch (e) {
    res.status(403).send('Invalid Login3');
  }
}