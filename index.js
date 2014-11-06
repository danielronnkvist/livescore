var express = require('express'),
    ejs = require('ejs'),
    sassMiddleware = require('node-sass-middleware'),
    http = require('http');

// Global variables
app = express();
router = express.Router();
root_path = __dirname;

// Express settings
app.set('port', process.env.PORT || 5000);
app.set('views', root_path+'/app/views');
app.set('title', 'Pug statistics');
app.engine('html', require('ejs').renderFile);
app.use(express.static(root_path + "/public"));
app.use(sassMiddleware({
  src: root_path+"/public/scss",
  dest: root_path+"/public/css",
  debug: true,
  outputStyle: "compressed",
  prefix: "/css"
}));

// Routings for the project
require('./config/routes.js');

// Create server
http.createServer(app).listen(app.get('port'));
console.log("Node app is running at localhost:" + app.get('port'));
