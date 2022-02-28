const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
  title: { type: String },
  category: {type: String},
  price: { type: Number },
  stock: { type: Number },
  img: { type: String },
  featured: { type: Boolean},
});

const Products = mongoose.model("Kaburger-BE", ProductsSchema);

module.exports = {
    Products,
  };