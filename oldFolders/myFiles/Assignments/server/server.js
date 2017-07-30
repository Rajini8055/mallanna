var express = require('express');
var app, server;
var fs = require('fs');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');
var console = require('./consoleColors');
var url = require('url');
var opn = require('opn');
var _ = require('lodash');
var portfinder = require('portfinder');

var fileUpload = require('express-fileupload');

portfinder.basePort = 8100;
portfinder.getPort(function (err, port) {
      if (err) {
          console.redBold('Port Not Avaialable because of ' + err);
          return;
      }
      setup(port);
      return;
});


function setup(port){
    app = express();
    server = app.listen(port,function(){
      console.cyanBold('Log Parser Listening on ' + port);
      onServerBind();
      opn('http://localhost:'+port);
    });

    server.on('error',function(err){
      console.redBold(' Error while trying to setup LogParser  ');
      var code = err && err.code? err.code : err;
      console.log(code);
    });

}

function onServerBind(){
  'use strict';
  app.use(cors);
  app.use(fileUpload({ safeFileNames: true, preserveExtension: true }));
  app.use(express.static(__dirname + '/../client'));
  app.use(compression());
  app.use(bodyParser());
  app.get('/messages', getMessages);
  app.get('/tasks', getTasks);
  app.post('/message',addMessage);
  app.post('/task',addTask);
  
}

function addTask(req,res) {
  'use strict';

  var task = req.body;
  if(task){
    var pa = path.normalize(__dirname+'/data/tasks.json');
    var all =  readJsonFileSync(pa);
    var tasks = all.tasks;
    tasks.push(task);
    var data = {
      tasks: tasks
    };
    data = JSON.stringify(data,null,2);
    writeJsonFileSync(pa,data);
    res.json({sucess:'Task saved successfully'});
    res.end();

  }else{
    res.json({message:'sorry data sent is not good!!'});
    res.end();
  }
}

function addMessage(req,res){
  'use strict';

  var message = req.body;
  if(message){
    var pa = path.normalize(__dirname+'/data/messages.json');
    var all =  readJsonFileSync(pa);
    var messages = all.messages;
    messages.push(message);
    var data = {
      messages: messages
    };
    data = JSON.stringify(data,null,2);
    writeJsonFileSync(pa,data);
    res.json({sucess:'Message saved successfully'});
    res.end();

  }else{
    res.json({message:'sorry data sent is not good!!'});
    res.end();
  }

}



function getMessages(req,res){
  var pa = path.normalize(__dirname+'/data/messages.json');
var all =  readJsonFileSync(pa);
var messages = all.messages;
res.json(messages);
console.log('served memssages')
}


function getTasks(req,res){
  var pa = path.normalize(__dirname+'/data/tasks.json');
var json =  readJsonFileSync(pa);

res.json(json);
console.log('served memssages')
}

function writeJsonFileSync(filepath,data){
    fs.writeFileSync(filepath, data);
}



function readJsonFileSync(filepath, encoding){
    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function cors(req, res, next) {
  'use strict';
   if (req.method === 'OPTIONS') {
        console.log('!OPTIONS');
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Credentials',false);
        res.header('Access-Control-Max-Age',86400);
        res.header('Access-Control-Allow-Headers','X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        res.json({});
        res.end();
  }else{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  }
}
