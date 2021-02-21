const itemSvc = require("../services/productSvc");
/**
 * Función asíncrona que entrega los productos obtenidos en la búsqueda para ser consumido como API Rest
 * @param {*} req
 * @param {*} res
 */
const getProductsController = async (req, res) => {
  let { query: { search, limit } } = req;
  const qs = search || "";
  limit = limit || 4;
  try {
    const response = await itemSvc.getProducts(qs, limit);
    res.send(response);
  } catch (e) {
    res.send(e);
  }
};

module.exports = { getProductsController };
