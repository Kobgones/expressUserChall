const database = require("./database");

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where PersonId = ?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
      } else {
        res.status(404).send("User Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
    getUsersById,
  };