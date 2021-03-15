const express = require('express')
const app = express()
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could NOT Connect to database: ', err);
    } else {
        console.log('Connected to database: ' + config.db);

    }
}, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });


app.use(express.static(__dirname + '/clinet/dist/clinet'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/clinet/dist/clinet/index.html'))
})

app.listen(8080, () => {
    console.log("Listening on Port 8080");
})