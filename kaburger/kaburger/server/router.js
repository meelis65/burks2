const express = require("express");
const router = express.Router();
const { Products } = require("./dbConnection");
const { Users } = require("./dbConnection");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");

router.post("/register", async function (request, response) {
  try {
    if (request.body.password) {
      request.body.password = bcrypt.hashSync(request.body.password, 10);
    }
    await Users.create(request.body);
    response.send({ status: "All Good" });
  } catch (error) {
    console.error("register endpoint failed");
    response.status(500).send({ status: "Not good" });
  }
});

router.post("/login", async function (request, response) {
  try {
    const user = await Users.findOne({ email: request.body.email });
    if (user.password) {
      const isPasswordValid = bcrypt.compareSync(
        request.body.password,
        user.password
      );
      if (isPasswordValid) {
        const token = jwt.sign({ email: user.email }, SECRET, {
          expiresIn: "1h",
        });
        response.send({ token: "Bearer " + token });
      } else {
        throw "Not valid";
      }
    } else {
      throw "User does not exist";
    }
  } catch (error) {
    response.status(401).send({ status: "Not good" });
  }
});

router.get("/get-burgers", async function (request, response) {
  const result = await Products.find();
  console.log(result);
  response.send(result);
});

router.get("/delete-burger/:id", async function (request, response) {
  await Products.deleteOne({ _id: request.params.id });
  console.log("Deleting Product..");
  response.send({});
});

router.get("/get-burger/:id", async function (request, response) {
  console.log(request.params.id); 
  const result = await Products.findOne({ _id: request.params.id });
  console.log(result);
  response.send(result);
});

router.patch("/update-burger/:id", async function (request, response){
  await Products.updateOne(
    { _id: request.params.id },
    { $set: { stock: request.body.stock } }
  );
  console.log("Updating Product..");
  response.send({});
});

router.post("/add-burgers", async function (request, response) {
  console.log(request.body);
    if (request.body.title) {
    await Products.create(request.body);
    console.log("Adding Burger...");
  }
  response.send("done");
}); 



module.exports = router;