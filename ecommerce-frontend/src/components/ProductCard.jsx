import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../functions/product";
import { add } from "../redux/features/ProductCartSlice";
import { AddWishlist } from "../redux/features/ProductWishListSlice";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

export const ProductCard = () => {
  const [products, setProduct] = useState([]);

  const dispatch = useDispatch();

  const likedProduct = useSelector((state) => state.ProductWishlist.like);
  // console.log("liked product ",likedProduct);
  

  useEffect(() => {
    const fetchdata = async () => {
      const products = await getProduct(); // Fetch product
      setProduct(products);
    };
    fetchdata();
  }, []);

  const navigate = useNavigate();

  const handleViewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  const handleadd = (product) => {
    dispatch(add(product));
     toast.success(` 🎉 Item added to your cart!`);
  };

  // Function to toggle the like state for a specific product
  const handleHeartClick = (product) => {
    dispatch(AddWishlist(product));
    toast.success("🎉 Item added to your wishlist!");
  };

  const isInWishList = (product) => {
    return likedProduct.some((item) => item.id === product.id);
  };

  const titlesort = (title, titleLength) => {
    return title.length > titleLength
      ? `${title.substring(0, titleLength)}..`
      : title;
  };
  return (
    <section className="mx-10 my-10 bg-white">
      <div className="Arrival space-y-5">
        <p className="arival-featured text-[16px] font-700 text-red-400">
          Today&apos;s
        </p>
        <h2 className="ml-[5px] text-[30px] font-500">Flash Sales</h2>
      </div>

      <Swiper
        modules={[Navigation, A11y]} // Enable required modules
        navigation // Show navigation arrows when content overflows
        slidesPerView={4} // Number of slides to show at a time
        breakpoints={{
          // Responsive breakpoints for different screen sizes
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="card-container px-4">
              <div className="mb-4 mt-4 rounded-lg border-2">
                {/* card image */}
                <div className="card-img group relative flex justify-center bg-[#f0efef] bg-cover">
                  <div className="cardImg px-2 py-2">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-[200px] object-cover"
                    />
                  </div>

                  {/* sale percentage */}
                  <div className="salePercentage absolute left-3 top-3 rounded-md bg-red-600 px-3 py-1">
                    <p className="text-center text-sm font-400 text-white">
                      -{product.discountPercentage}%
                    </p>
                  </div>

                  {/* heart icon */}
                  <div
                    className={`icons absolute right-2 top-2 flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-gray-200 transition-all duration-300 ease-in-out ${
                      isInWishList(product) ? "is-active" : ""
                    }`}
                    onClick={() => handleHeartClick(product)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-[70%] w-[100%] ${
                        isInWishList(product) ? "text-red-500" : "text-gray-500"
                      }`}
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"></path>
                    </svg>
                  </div>

                  {/* add to cart button */}
                  <button
                    className="addtocart absolute bottom-0 hidden w-full items-center justify-center rounded-b-md bg-black py-1 text-white group-hover:flex"
                    onClick={() => handleadd(product)}
                  >
                    <p className="text-center">Add To Cart</p>
                  </button>
                </div>

                {/* card information */}
                <div className="cardInfo mt-2 space-y-1 px-2">
                  <h2 className="min-h-12 text-wrap font-400">
                    {titlesort(product.title, 30)}
                  </h2>
                  <div className="flex justify-between items-center">
                  <p className="price text-[14px] font-600 text-red-400">
                    ${product.price}
                  </p>
                    <button onClick={() => handleViewProduct(product.id)} className=" p-2 mb-2 rounded-lg text-white bg-[#002D74] hover:scale-105">view</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
