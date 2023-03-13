const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    id: String,
    url: String,
    detailsurl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagling: String,
});

const Products = new mongoose.model("products", productsSchema);

module.exports = Products;