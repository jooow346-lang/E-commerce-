const axios = require('axios');
const express = require('express');
const router = express.Router();
const authenticationMiddleware = require('./../middleware/middleware');

router.get('/product', authenticationMiddleware, async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;