/**
 * Helper that allows to fetch data to the server.
 * @param {func} getInfo  Get info
 */
const fetchHelper = {
    getInfo: async (query) => {

      const request = await fetch(`${process.env.REACT_APP_URL}/products?search=${query}`, { method: "get" });
      const result = await request.json();
      return result;
    }
  };
  
  export default fetchHelper;
  