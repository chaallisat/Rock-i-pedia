const music = require("./bandAPI.js")
const http = require("http");
const express = require("express");
const exphbs = require("express-handlebars");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8001;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// console.log(music.bands);



const rocks = music.bands;

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "assets/public/index.html"));
  });
  
  app.get("/ptv", function(req, res) {
    res.sendFile(path.join(__dirname, "assets/public/ptv.html"));
  });
  

app.get("/api/bands", function(req, res) {
    return res.json(rocks);
  }); 

  app.get("/api/bands/:rocks", function(req, res) {
    const chosen = req.params.rocks;
  
    console.log(chosen);
  
     for (let i = 0; i < rocks.length; i++) {
       if (chosen === rocks[i].routeName) {
         return res.json(rocks[i]);
       }
     }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/bands", function(req, res) {

    const newrocks = req.body;
  
     newrocks.routeName = newrocks.name.replace(/\s+/g, "").toLowerCase();
  
     console.log(newrocks);
  
     rocks.push(newrocks);
  
    res.json(newrocks);
  });

  app.get("/band/:route", function(req, res) {
    const chosen = req.params.rocks.routeName;

    for (let i = 0; i < rocks.length; i++) {
        if (chosen === rocks[i].routeName) {

            res.render("index", rocks[i]);
        }
    }
});

app.get("/bands", function(req, res) {
    res.render("songs", {
      songs: rocks,
  
    });
  });

  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
  });

