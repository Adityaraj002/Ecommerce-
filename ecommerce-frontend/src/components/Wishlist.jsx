import { IoCartOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../functions/product";
import { add } from "../redux/features/ProductCartSlice";
import { AddWishlist } from "../redux/features/ProductWishListSlice";
import { toast } from "react-toastify";

import { useEffect, useState } from "react";
import {
  RemoveWishlist,
  ClearWishlist,
} from "../redux/features/ProductWishListSlice";

export const Wishlist = () => {
  const [products, setproducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchdata = async () => {
      const products = await getProduct(); // Fetch product
      setproducts(products);
    };
    fetchdata();
  }, []);
  // console.log("products : ", products);

  const items = useSelector((state) => state.ProductWishlist.like); //getting the data we like or added in
  // console.log("wishlist length : ", items.length);

  const handleAddCart = (product) => {
    dispatch(add(product));
    toast.success("🎉 Item added to your cart!");
  };

  const handleDeleteWishlist = (product) => {
    dispatch(RemoveWishlist(product));
    toast.info("🗑️ Item removed from your wishlist.");
  };

  const titlesort = (title, titleLength) => {
    return title.length > titleLength
      ? `${title.substring(0, titleLength)}..`
      : title;
  };

  const handleMoveToCart = (items) => {
    items.forEach((product) => {
      dispatch(add(product));
      dispatch(ClearWishlist(product.id));
      toast.success("🎉 Item added to your cart!");
    });
  };

  // Function to toggle the like state for a specific product
  const handleHeartClick = (product) => {
    dispatch(AddWishlist(product));
    toast.success("🎉 Item added to your wishlist!");
  };

  const isInWishList = (product) => {
    return items.some((item) => item.id === product.id);
  };

  return (
    <>
      <div className="m-10 bg-white">
        <div className="wishlistContainer mb-4 p-2">
          {/* WishList header */}
          <div className="block space-y-6 lsm:flex lsm:items-center lsm:justify-between lsm:space-y-0">
            <h1 className="font-Poppins text-[18px] font-400">
              Wishlist({items.length})
            </h1>
            <button
              className="rounded-lg border-2"
              onClick={() => handleMoveToCart(items)}
            >
              <p className="px-6 py-4 font-500"> Move All To Cart</p>
            </button>
          </div>

          {/* WishList card section */}
          <div className="flex flex-wrap justify-evenly overflow-hidden">
            {items.map((product) => (
              <div
                className="wCardContainer relative mt-8 rounded-md border-2"
                key={product.id}
              >
                <div className="mb-2 flex h-[200px] w-[300px] justify-center p-2">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full object-cover"
                  />
                </div>
                <div className="salePercentage absolute left-3 top-3 rounded-md bg-red-600 px-3 py-1">
                  <p className="text-center text-sm font-400 text-white">
                    - {product.discountPercentage}%
                  </p>
                </div>

                {/* delete button */}
                <button
                  className="absolute right-4 top-4 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-full bg-red-500 transition-all duration-300 ease-in-out"
                  onClick={() => handleDeleteWishlist(product)}
                >
                  <RiDeleteBinLine size="25px" />
                </button>

                {/* add to cart button */}
                <div
                  className="flex items-center justify-center gap-2 rounded-b-md bg-black py-[0.50rem] text-white cursor-pointer"
                  onClick={() => handleAddCart(product)}
                >
                  <IoCartOutline className="text-[25px] font-300" />
                  <p className="text-[12px] font-300">Add To Cart</p>
                </div>

                <div className="cardInfo mb-2 mt-2 space-y-1 px-2">
                  <h4 className="text-wrap font-400">
                    {titlesort(product.title, 20)}
                  </h4>
                  <p className="price text-[14px] font-600 text-red-400">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <div className="block space-y-6 lsm:flex lsm:items-center lsm:justify-between">
            <p className="arival-featured text-[16px] font-700 text-red-400">
              Just For You
            </p>
            <button className="ml-2 mr-4 rounded-md border-[3px] px-7 py-3 font-400">
              See All
            </button>
          </div>

          <div className="mx-4 mb-6 grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* start */}
            {products
              .map((product) => (
                <div
                  className="wCardContainer relative mb-4 mt-8 rounded-md border-2"
                  key={product.id}
                >
                  <div className="mb-2 flex h-[200px] w-[300px] items-center justify-center p-2">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full object-cover"
                    />
                  </div>
                  <div className="salePercentage absolute left-3 top-3 rounded-md bg-red-600 px-3 py-1">
                    <p className="text-center text-sm font-400 text-white">
                      - {product.discountPercentage}%
                    </p>
                  </div>

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
                  <div
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-b-md bg-black py-[0.50rem] text-white"
                    onClick={() => handleAddCart(product)}
                  >
                    <IoCartOutline className="text-[25px] font-300" />
                    <p className="text-[12px] font-300">Add To Cart</p>
                  </div>

                  <div className="cardInfo mb-2 mt-2 space-y-1 px-2">
                    <h4 className="text-wrap font-400">
                      {titlesort(product.title, 20)}
                    </h4>
                    <p className="price text-[14px] font-600 text-red-400">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))
              .sort(() => Math.floor(Math.random() * 30) + 1)
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </>
  );
};
