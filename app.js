const express = require('express')
const app = express();

app.set("view engine","ejs");

//use middleware to serve static filesl semiddleawre to serve static files use middle ware to server static files use middle ware to serve static files use middle ware to serve static files use middle eware to serve static files use middle ware to serve static filse use middle ware to serve use middleware to serve static files use middleware to serve statle use middle ware to serve static files use middleawre to serve tatic files use middle ware to server static file suse middle ware to serve static files use middle ware to serve static files use middle waer to srve 
app.use(express.static('./public'));

app.get('/tasks', function (req, res) {
    res.render('tasks');
  });

  app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})