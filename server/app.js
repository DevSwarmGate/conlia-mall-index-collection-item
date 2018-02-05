const express = require('express'),
    http = require('http'),
    Path = require('path');

let app = new express(),
    server = http.Server(app),
    _root = Path.dirname(__dirname);

//default static folder
app.use('/', express.static(`${_root}\/client\/dist\/`));

//listen
app.listen(3000, (err) =>{
    console.log(err||'Server Started on localhost:3000');
});