const music = require("./bandAPI.js")
const http = require("http");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(music.bands);



const rocks = music.bands;
/*
for (let i = 0; i < rocks.length; i++) {
    const name = rocks[i].name;
    const img = rocks[i].image;
    const song = rocks[i].bestsong;

    console.log(`Name: ${name} \nImage: ${img} \nSong Name: ${song} \n ----------------------------`);
}*/

// const server = http.createServer(handleRequest);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/ptv", function(req, res) {
    res.sendFile(path.join(__dirname, "ptv.html"));
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

  app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
  });

