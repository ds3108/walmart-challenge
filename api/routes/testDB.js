const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

var Schema = mongoose.Schema;

    // login schema
    var products = new Schema({
        id: Number,
        brand: String,
        description: String,
        image: String,
        price: Number,
    }, { collection: 'products' });

    var productsModel = mongoose.model('products', products);

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";

router.get("/", async function (req, res, next) {
    var response = await getData();
    res.send(response);
});

// Connecting to MongoDB
mongoose.connect(
    "mongodb://productListUser:productListPassword@localhost:27017/admin",
    { useNewUrlParser: true }
);

// If there is a connection error send an error message
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
    databaseConnection = "Error connecting to Database";
});

// If connected to MongoDB send a success message
mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
    databaseConnection = "Connected to Database";
});

const getData = async () => {
    

    try {
        const products = await productsModel.find({}).lean().limit(200).exec();
        return products;
      } catch (err) {
        return 'error occured';
      }
}

module.exports = router;
