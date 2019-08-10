const music = require("./bandAPI.js")
const http = require("http");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// console.log(music.bands);



const rocks = music.bands;

for (let i = 0; i < rocks.length; i++) {
    const name = rocks[i].name;
    const img = rocks[i].image;
    const song = rocks[i].bestsong;

    console.log(`Name: ${name} \nImage: ${img} \nSong Name: ${song} \n ----------------------------`);
}

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

    const path = req.url;

    switch (path) {

        case "/":

        case "/ptv":

        case "/bands":

            return serveHTML(`${path}.html`, res);


        default:
            return serveHTML("/index.html", res);
    }


}

const serveHTML = (filePath, res) => {
    return fs.readFile(__dirname + filePath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(data);
    })
}

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

