const bcrypt = require('bcryptjs');
const express = require("express");
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const UserModel = require("../model/UserModel")

const router = express.Router();

router.post('/register', [
    check('username', 'Username is required').not().isEmpty(),
    check('email', 'Valid email is required').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  
    const { username, email, password } = req.body;
    try {
      let user = await UserModel.findOne({ email });
      if (user) return res.status(400).json({ msg: 'User already exists' });
  
      user = new UserModel({ username, email, password: await bcrypt.hash(password, 10) });
      await user.save();
  
      const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

router.post('/login', [
    check('email', 'Valid email is required').isEmail(),
    check('password', 'Password is required').exists()
  ], async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  
      const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
      res.json({ token, username: user.username });
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

  module.exports = router;