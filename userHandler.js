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

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("delete from users where PersonId = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the movie");
    });
};

module.exports = {
  createUser,
  deleteUser
};
