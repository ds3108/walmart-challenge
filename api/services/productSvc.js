const productsModel = require("../models/product");
const isPalindrome = (s, i) => (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i)


/**
 * Función asíncrona que devuelve las categorías
 * @param {string} queryString Identificador de la categoría
 */
const getProducts = async (queryString) => {
    try {
        let products = {results:[],palyndromSearch:false};
        if (isPalindrome(queryString) && queryString ) {
            products.palyndromSearch = true;
            products.results = await productsModel.find({ $or: [{ id: { $in: [(Number.isInteger(queryString)) ? Number(queryString) :''] } }, { brand: { $in: [queryString] } }, { description: { $in: [queryString] } }] }).lean().limit(200).exec();
        } else {
            products.results = await productsModel.find({}).lean().limit(200).exec();
        }
        return products;
    } catch (error) {
        return { message:'Error retrieving data from Mongo ', error};
    }
};

module.exports = { getProducts };
