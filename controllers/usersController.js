const { users } = require('../data/dummyData')

const getUsers = (req, res) => {
  res.json(users)
}

module.exports = { getUsers } 