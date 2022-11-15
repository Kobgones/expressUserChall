require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5000;
const welcome = (req, res) => {
  res.send("Welcome to my Users Lists");
};

app.get("/", welcome);

const userHandler = require("./userHandler");
const getUsers = require("./getUsers");

app.get("/users", userHandler.getUsers);
app.get("/users/:id", getUsers.getUsersById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
