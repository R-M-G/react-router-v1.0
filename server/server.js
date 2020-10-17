const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bookBodyGallery = require('./routes/book.router');
const PORT = process.env.PORT || 5000;

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json.json());
app.use(express.static('build'));

//Express Routes
app.use('/bookBodyGallery', bookBodyGallery);

// Start Server
app.listen(PORT, () =>{
    console.log("Listening on port:", PORT);
});

