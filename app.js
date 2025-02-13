var express = require('express');
const fs = require("node:fs");
var app = express();
app.listen(3000, () => {
    console.log('Server listening on 3000');
})

app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

const router = express.Router();
var u = "un";
app.get('/', function(req, res){
    // ZGxpcmg= dl
    // ZGmlssg= tl
    // ZGmlssg= tl
    switch(req.query.d){
        case "ZGxpcmg" : u = "dlinh";break;
        case "ZGmlssg" : u = "tlinh";break;
        case "ZGxpsmg" : u = "ly";break;
    }
    res.sendFile(__dirname + '/index.html');
});


app.post('/log', function(req, res){
    const fs = require('node:fs');
    var body = req.body;
    body.username = u;
    const content = JSON.stringify(body);
    console.log(content);
    res.status(200).send("");
})
