//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/todo-APP-Angular2'));
console.log(__dirname);
app.get('/*', function(req,res) {
    

res.sendFile(__dirname+ '/todo-App-Angular2/src/index.html');
//res.sendFile(path.join(__dirname+'/todo-APP-Angular2/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
