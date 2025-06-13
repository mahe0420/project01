const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const authMiddleware = require('../middleware/auth');
require('dotenv').config();

// ✅ Register route
router.post('/register', async (req, res) => {
  const { username, gmail, phone, password } = req.body;

  try {
    const existingUser = await User.findOne({ gmail });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, gmail, phone, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Login route
router.post('/login', async (req, res) => {
  const { gmail, password } = req.body;

  try {
    const user = await User.findOne({ gmail });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Protected Dashboard route
router.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('username gmail');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
console.log(user);

    res.json({ username: user.username, gmail: user.gmail }); // ✅ this line
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
