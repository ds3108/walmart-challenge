const { Router } = require("express");
const router = Router();
const { getProductsController } = require("../controller/itemController");

const author = { name: "Ignacio", lastname: "Aedo" };

/**
 * Rutas (endpoints) de la API Rest generada
 */
router.get("/", (req, res) =>
  res
    .status(200)
    .json({ author, connection: true, message: "Successful connection!" })
);
router.get("/products", getProductsController);

module.exports = router;
