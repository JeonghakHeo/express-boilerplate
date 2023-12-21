const fs = require('fs')
const path = require('path')
const { users, products } = require('../data/dummyData')

const getUsers = (req, res) => {
  res.json(users)
}

const createUser = (req, res) => {
  try {
    const newUser = req.body

    users.push(newUser)
    
    const dataFilePath = path.join(__dirname, '../data/dummyData.js')
    const updatedData = `module.exports = ${JSON.stringify({ users: users, products: products }, null, 2)};\n`
  
    fs.writeFileSync(dataFilePath, updatedData, 'utf-8');
  
    res.status(200).json({ message: 'User added successfully', user: newUser })
  } catch (error) {
    console.log('Error creating user', error)
    res.status(500).json({ error: 'Internal Serve Error'})
  }

}

const deleteUser = (req, res) => {
  try {
    const { id } = req.params

    const updatedUsers = users.filter(user => user.id !== parseInt(id, 10))

    const dataFilePath = path.join(__dirname, '../data/dummyData.js')
    const updatedData = `module.exports = ${JSON.stringify({ users: updatedUsers, products: products }, null, 2)};\n`

    fs.writeFileSync(dataFilePath, updatedData, 'utf-8')

    res.status(200).json({ message: 'User deleted successfully', users: updatedUsers })
  } catch (error) {
    console.log('Error deleteing user', error)
    res.status(500).json({ error: 'Internal Server Error'})

  }
  
}

module.exports = { getUsers, createUser, deleteUser }