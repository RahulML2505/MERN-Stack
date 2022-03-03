const express = require('express');
const router = express.Router();

router.use('/goals', require('./goals'));
router.use('/users', require('./users'));

module.exports = router;
