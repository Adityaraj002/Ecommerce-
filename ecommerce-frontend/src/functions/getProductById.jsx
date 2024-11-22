import { getProduct } from "./product";

export const getProductById = async (id) => {
  try {
    const allProducts = await getProduct(); // Fetch all products
    if (!allProducts) throw new Error("No products available");

    const product = allProducts.find((item) => item.id === parseInt(id)); // Find product by ID
    if (!product) throw new Error("Product not found");

    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};
