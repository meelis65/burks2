const mongoose = require("mongoose");
const { Products } = require("./models/ProductSchema");
const { Users } = require("./models/UsersSchema");
// Connecting to database
mongoose.connect(
  "mongodb+srv://klaus:NTt6_6fqUwU4kBz@cluster0.mwojn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

module.exports = {
  Products,
  Users,
};