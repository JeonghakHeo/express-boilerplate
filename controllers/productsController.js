const { products } = require('../data/dummyData')

const getProducts = (req, res) => {
  res.json(products)
}

module.exports = { getProducts } 