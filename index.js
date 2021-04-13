const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose connection is open");
    })
    .catch(err => {
        console.log("Mongoose Error");
        console.log(err);
    });


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof');
});
app.listen(3000, () => {
    console.log("Express is listening on port 3000")
});
