var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    price: Number,
    imageUrl:String,
    description:String
});


module.exports = mongoose.model("product", productSchema);