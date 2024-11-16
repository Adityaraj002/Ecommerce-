import axios from 'axios'
 

export const getProduct = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');

      // console.log("response:", response.data.products[0].images[0]);
      const productsdata = response.data.products;


      // Indicate that the loading is done, if applicable (you could return or handle it differently in JS)
      console.log("Data fetched successfully");
      
      return productsdata;
    } catch (error) {
      console.error("error:", error);
       // Handle loading state or error response as needed
      console.log("Failed to fetch data");
      return null;
    }
  };