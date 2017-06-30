var extractor = require('./module.js');
var express = require('express');
var app = express();
app.get('/api',function(req,res){
res.json(extractor(req));
});
app.use(function(req,res){
res.send('404- Page not Found');
});
app.listen(3000);
