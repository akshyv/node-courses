const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
//define path for express configs

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup hbs (handlebars and view location)
app.set("view engine", "hbs");
app.set("views", viewsPath); //if the folder name is views hbs takes that file directly we can skip line 8 and 12
hbs.registerPartials(partialsPath);

// setup static directory to setup
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Akshy",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "This is help message",
    name: "Akshy1",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some help",
    title: "Help",
    name: "Akshy2",
  });
});

app.get("/weather", (req, res) => {
  res.send([
    { city: "Chennai", pin: 600001 },
    { city: "Madurai", pin: 625001 },
  ]);
});

app.listen(3000, () => {
  console.log("Server is up on the port 3000");
});
