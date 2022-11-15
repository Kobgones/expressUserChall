const users = [
  {
    id: 1,
    LastName: "Mom",
    age: 89,
  },
  {
    id: 2,
    LastName: "Dad",
    age: 45,
  },
  {
    id: 3,
    LastName: "Sister",
    age: 22,
  },
  {
    id: 4,
    LastName: "Brother",
    age: 35,
  },
];

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = {
  getUsers,
};
