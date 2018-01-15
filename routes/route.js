const express = require('express');
const router = express.Router();
const translations = require('./translations');
const contacts = require('./contacts');
router.use('/translations', translations);
router.use('/contacts', contacts);
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});
module.exports = router;