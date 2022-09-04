const express = require('express')
const router = express.Router()

const  { 
    getCarts,
    addToCart,
    updateCart,
    deleteCart,
    findCart
} = require('../controllers/cart.js')

router.get('/', getCarts)
router.post('/', addToCart)
router.put('/:id', updateCart)
router.delete('/:id', deleteCart)
router.get('/:id', findCart)

module.exports = router