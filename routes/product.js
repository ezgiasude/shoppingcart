const express = require('express')
const router = express.Router()

const  { 
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    findProduct
} = require('../controllers/product.js')

router.get('/', getProducts)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/:id', findProduct)

module.exports = router