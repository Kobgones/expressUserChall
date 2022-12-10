const database = require("./database");

const updateUser = (req, res) => {
  const PersonID = parseInt(req.params.id);
  const { LastName, age } = req.body;
  database
    .query(
      "UPDATE users SET LastName = ?, age = ? WHERE PersonID = ?"
      [
        (LastName, age, PersonID)
      ]
    )
    .then(([user]) => {
      if (user.affectedRows === O) {
        res.status(404).send("Not Found");
      } else {
        res.status(204).send("Ok, user updated 👍🏽");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error updating the user");
    });
};

module.exports = {
  updateUser,
};
