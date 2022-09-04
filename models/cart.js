var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var cartSchema = new Schema({
    productId: String,
    customerId:String,
    quantity: Number,
    price: Number,
    totalAmount:Number
});


module.exports = mongoose.model("cart", cartSchema);