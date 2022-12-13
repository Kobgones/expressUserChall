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
app.put("/api/user/:id", putUser.updateUser); // Update an user
app.delete("/api/user/:id" ,userHandler.deleteUser) // Delete an user

const { hashPassword } = require("./auth.js");
app.post("/api/users", hashPassword, userHandler.createUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
