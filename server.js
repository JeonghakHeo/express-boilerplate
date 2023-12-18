const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const users = require('./routes/users')
const products = require('./routes/products')

dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', 'react-redux-boilerplate', 'dist')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'react-redux-boilerplate', 'dist', 'index.html'))
})

app.use(express.static(path.join(__dirname, 'public'), {
  // maxAge: 10000
  setHeaders: (res) => {
    res.setHeader('Cache-control', 'private', 'max-age=10000')
  }
}))

app.use('/api/users', users)

app.use('/api/products', products)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})