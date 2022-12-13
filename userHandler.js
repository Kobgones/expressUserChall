const database = require("./database");

const createUser = (req, res) => {
  const { firstname, lastname, email, city, language, hashedPassword } =
    req.body;

  database
    .query(
      "INSERT INTO Users(firstname, lastname, email, city, language, hashedPassword) VALUES (?, ?, ?, ?, ?, ?)",
      [firstname, lastname, email, city, language, hashedPassword]
    )
    .then(([result]) => {
      res
        .location(`/users/${result.insertId}`)
        .status(201)
        .send("User created ! 👍🏽");
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
  deleteUser,
};
