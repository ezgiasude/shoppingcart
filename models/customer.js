var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var customerSchema = new Schema({
    mail: String,
    name: String,
    surname: String,
    password: String,
});


module.exports = mongoose.model("customer", customerSchema);