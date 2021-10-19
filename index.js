const express = require('express');

const app = express();
const { config } = require('./config/index');

app.get('/', function (req, res) {
    res.send('Hello Word')
});

app.get('/s', function (req, res) {
    res.json({ hello: 'word' })
});
app.listen(config.port, function(){
    console.log('App runing on port: ${config.port}');
});