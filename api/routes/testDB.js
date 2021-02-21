const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const SchemaBuild = require("../schemas/product");
const isPalindrome = (s, i) => (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i)

var Schema = mongoose.Schema;

// login schema
var products = SchemaBuild(mongoose);

var productsModel = mongoose.model('products', products);

// Variable to be sent to Frontend with Database status
let databaseConnection = "Waiting for Database response...";

router.get("/", async function (req, res, next) {
    const { search } = req.query;
    var response = await getData(search);
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

const getData = async (search) => {
    try {
        const products;
        if (isPalindrome(search)) {
            products = await productsModel.find({ $or: [{ id: { $in: [search] } }, { brand: { $in: [search] } }, { description: { $in: [search] } }] }).lean().limit(200).exec();
        } else {
            products = await productsModel.find({}).lean().limit(200).exec();
        }
        return products;
    } catch (error) {
        return { message:'Error retrieving data from Mongo ', error};
    }
}

module.exports = router;
