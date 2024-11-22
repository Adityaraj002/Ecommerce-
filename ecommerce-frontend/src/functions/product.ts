import axios from 'axios';

export const getProduct = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');

    // Adding a delay of 2 seconds before returning the data
    await new Promise(resolve => setTimeout(resolve, 2000));

    const productsdata = response.data.products;
    console.log("Data fetched successfully");
    
    return productsdata;
  } catch (error) {
    console.error("error:", error);
    console.log("Failed to fetch data");
    return null;
  }
};
