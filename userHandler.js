const database = require("./database");

const createUser = (req, res) => {
  const { PersonID, Lastname, age} = req.body;

  database
  .query(
    "INSERT INTO Users(PersonID, Lastname, age) VALUES (?, ?, ?)",
    [PersonID, Lastname, age]
  )
  .then(([result]) => {
    res.location(`/users/${result.insertId}`).status(201).send("User created ! 👍🏽")
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send("Error saving the user");
  });
};

module.exports = {
  createUser,
};
