require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json())

const port = process.env.APP_PORT ?? 5000;
const welcome = (req, res) => {
  res.send("Welcome to my Users Lists");
};

app.get("/", welcome);

const userHandler = require("./userHandler");
const getUsers = require("./getUsers");
const putUser = require("./putUser")

// LINKS FOR HTTP REQUESTS

app.get("/api/users", getUsers.getUsers); // Get all users
app.get("/api/user/:id", getUsers.getUsersById); // Get all users by id
app.post("/api/users", userHandler.createUser); // Create an user
app.put("/api/user/:id", putUser.updateUser); // Update an user


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
