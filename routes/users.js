const express = require('express')
const { getUsers, createUser, deleteUser } = require('../controllers/usersController')
const router = express.Router()

router.get('/', getUsers).post('/', createUser).delete('/:id', deleteUser)

module.exports = router