/**
 * Helper that allows to fetch data to the server.
 * @param {func} getInfo  Get info
 */
const fetchHelper = {
    getInfo: async () => {
      const request = await fetch("http://localhost:9000/testAPI", { method: "get" });
      const result = await request.json();
      return result;
    }
  };
  
  export default fetchHelper;
  