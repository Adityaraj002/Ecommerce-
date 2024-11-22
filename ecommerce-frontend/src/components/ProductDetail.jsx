import { getProduct } from "@/functions/product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Loading } from "./Loading"; // Import the Loading component
import { useDispatch } from "react-redux";
import { add } from "@/redux/features/ProductCartSlice";

const ProductDetail = () => {
  const { id } = useParams();

  const [products, setProducts] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleCheckout = () => {
    navigation("/cart");
    dispatch(add(products));
  };

  const handleProductCart = () => {
    dispatch(add(products));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newReview = {
        username: "Anonymous User", // Replace with actual username if available
        avatar: "https://via.placeholder.com/40", // Placeholder avatar URL
        comment: newComment,
        rating: newRating,
      };
      setProducts((prev) => ({
        ...prev,
        reviews: [...(prev.reviews || []), newReview],
      }));
      setNewComment("");
      setNewRating(5);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      setIsLoading(true);
      try {
        const allproductdata = await getProduct();
        const product = allproductdata.find((item) => item.id === parseInt(id));
        setProducts(product);
        setSelectedImage(product?.images?.[0] || "");
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [id]);

  const images =
    products.images && Array.isArray(products.images) && products.images.length > 0
      ? products.images
      : [];

  const reviews = products.reviews || []; // Fallback to an empty array if no reviews

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 md:p-8 lg:p-16 bg-gray-100">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images Section */}
        <div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src={selectedImage}
              alt={products.title || "Product Image"}
              className="w-full max-h-[500px]"
            />
          </div>
          <div className="flex space-x-2 mt-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Side View ${index + 1}`}
                className={`w-20 h-20 rounded shadow cursor-pointer ${selectedImage === image ? "ring-2 ring-black" : ""
                  }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6 text-[#002D74]">
          <h2 className="text-2xl font-bold">{products.title}</h2>
          <p className="text-[#002D74] text-sm">{products.brand}</p>

          {/* Pricing */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-[#002D74]">${products.price}</span>
            <span className="line-through text-[#002D74]">$129.00</span>
            <span className="text-green-600 text-sm">5% Disc</span>
          </div>

          {/* Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1 text-yellow-500">★★★★☆</div>
            <span className="text-sm text-[#002D74]">(4.9, 1.2K Reviews)</span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-[#002D74]">Description</h3>
            <p className="mt-2">{products.description}</p>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-sm font-bold text-[#002D74]">Size</h3>
            <div className="flex space-x-4 mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={handleProductCart}
              className="px-6 py-3 bg-[#002D74] text-white rounded hover:bg-[#002D74]/90"
            >
              Add to Cart
            </button>
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-gray-300 text-[#002D74] rounded hover:bg-gray-400"
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews and Comments Section */}
      <div className="mt-16 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-4 text-[#002D74]">Customer Reviews</h3>

        {/* Existing Reviews */}
        <div className="space-y-4 text-[#002D74]">
          {reviews.map((review, index) => (
            <div key={index} className="flex items-start space-x-4 border-b pb-4">
              <img
                src={review.avatar || "https://via.placeholder.com/40"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-bold">{review.username}</p>
                <div className="flex items-center space-x-1 text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-sm mt-2">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add a Comment */}
        <form onSubmit={handleCommentSubmit} className="mt-6 text-[#002D74]">
          <h4 className="text-lg font-bold mb-2">Leave a Comment</h4>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment here..."
            className="w-full p-2 border rounded mb-4"
            rows="4"
          ></textarea>
          <div className="flex items-center space-x-4">
            <label className="text-sm font-bold">Rating:</label>
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="p-2 border rounded"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-[#002D74] text-white rounded hover:bg-[#002D74]/90"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Related Products */}
      <div className="mt-16 text-[#002D74]">
        <h3 className="text-xl font-bold">This item can be cool with this</h3>
        <div className="gap-4 mt-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
