const express = require('express');
const router = express.Router();
const bookBody = require('../modules/bookBody.data');


// GET Route

router.get('/', (req, res) => {
res.send(bookBody);
});

module.exports = router;