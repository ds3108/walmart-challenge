const itemSvc = require("../services/productSvc");
/**
 * Función asíncrona que entrega los productos obtenidos en la búsqueda ejecutada en la capa de servicios.
 * @param {*} req
 * @param {*} res
 */
const getProductsController = async (req, res) => {
  let { query: { search } } = req;
  const qs = search.toLowerCase() || "";
  try {
    const response = await itemSvc.getProducts(qs);
    res.send(response);
  } catch (e) {
    res.send(e);
  }
};

module.exports = { getProductsController };
