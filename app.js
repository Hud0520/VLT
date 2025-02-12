var express = require('express');
const fs = require("node:fs");
var app = express();
app.listen(3000, () => {
    console.log('Server listening on 3000');
})

app.use('/img', express.static(__dirname + '/img'));
app.use('/fonts', express.static(__dirname + '/fonts'));
const router = express.Router();
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.post('/log', function(req, res){
    const fs = require('node:fs');
    const content = req.body;
    fs.writeFile('/log', content, err => {
        if (err) {
            console.error(err);
        } else {
            // file written successfully
        }
    });
})