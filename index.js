var express = require('express');
var cors = require('cors')

const db = require("./helper/db")();
const customer_routes = require('./routes/customer.js');
const product_routes = require('./routes/product.js');
const cart_routes = require('./routes/cart.js');

const app = express()
app.use(cors())
const port = 3000;

app.use(express.json());
app.use('/api/customer', customer_routes)
app.use('/api/product', product_routes)
app.use('/api/cart', cart_routes)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

