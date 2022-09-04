const express = require('express')
const router = express.Router()

const  { 
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    findCustomer,
    loginCustomer
} = require('../controllers/customer.js')

router.get('/', getCustomers)
router.post('/', createCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)
//router.get('/:id', findCustomer)
router.get('/login', loginCustomer)

module.exports = router