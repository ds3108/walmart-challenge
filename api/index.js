// express
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const config = require("config");
const mongoConnectionStr = `${config.get("apiConfig.uri")}`;

const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//MongoDB

// Connecting to MongoDB
mongoose.connect(
    mongoConnectionStr,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// If connected to MongoDB send a success message. Just to be ensured because the  listening methods are already deprecated.
mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
});

// routes
app.use('/api', require("./routes/api"));

app.listen(port, () => {
  console.log("Challenge is running in port: " + port);
});
