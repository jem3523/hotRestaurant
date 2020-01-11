var express = require("express");
var inquirer = require("inquirer");
var path = require("path");
//var apiRoutes = require("./routes/apiRoutes")(app);
//var htmlRoutes = require("./routes/htmlRoutes")(app);
var tableList = require("./data/table");
var waitList = require("./data/wait");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//establish html routes
app.get("/", function(req, res) 
{
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/tables", function(req, res) 
{
  res.sendFile(path.join(__dirname, "./public/tables.html"));
});

app.get("/reserve", function(req, res) 
{
res.sendFile(path.join(__dirname, "./public/reserve.html"));
});

app.get("/api/tables", function(req, res) 
{
  return res.json(tables.js);
});

app.get("/api/reserve", function(req, res) 
{
  return res.json(wait.js);
});


//add a table
  app.post("/sendData", function(req, res) 
  {
    var newPatron = req.body;
    console.log(newPatron);

    if (tableList.length < 5)
    {
      tableList.push(newPatron);
    }
    else
    {
      waitList.push(newPatron);
    }
    res.json(newPatron);
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });