import { MdDelete } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  clearAll,
  DecrementProduct,
  IncrementProduct,
  remove,
  selectTotalAmount,
} from "@/redux/features/ProductCartSlice";
import { useState } from "react";
import { RemoveWishlist } from "@/redux/features/ProductWishListSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.product.product);
  // console.log("cart product : ", cartProduct);

  const WishListProduct = useSelector((state) => state.ProductWishlist.like);

  const totalAmount = useSelector(selectTotalAmount);
  const [sortOption, setsortoption] = useState("");

  
  const navigate = useNavigate();

  const handleWishListToCart = () => {
    if (WishListProduct && WishListProduct.length > 0) {
      WishListProduct.forEach((product) => {
        dispatch(add(product));
        dispatch(RemoveWishlist(product))
      });
    } 
  };

  const handleSortChange = (e) => {
    setsortoption(e.target.value);
  };

  const handleDeleteProduct = (product) => {
    dispatch(remove(product));
  };
  const handleIncrementProduct = (product) => {
    dispatch(IncrementProduct(product));
  };
  const handleDecrementProduct = (product) => {
    dispatch(DecrementProduct(product));
  };
  const handleClearAllProduct = () => {
    dispatch(clearAll(cartProduct));
  };

  // handling to process to conform user details 
  const handleSubmit = () => {
    console.log("data");
    if (cartProduct && cartProduct.length > 0) {
      navigate('/checkout')
    } else {
      alert("Your cart is empty. Please add items to proceed.");
    }
  }
  
  
  const sortedProducts = [...cartProduct].sort((a, b) => {
    if (sortOption == "price") {
      return a.price - b.price; // Ascending order by price
    } else if (sortOption == "price_desc") {
      return b.price - a.price; // Descending order by price
    }
    return 0; // No sorting if no option is selected
  });

  return (
    <>
      {cartProduct.length === 0 ? (
        <div className="bg-white">
          <div className="grid justify-center border-2 p-10">
            <img
              src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
              alt=""
            />
            <h4 className="text-center text-[20px] font-500 text-opacity-20">
              Hey,it feels so light!
            </h4>
            <p className="p-2 text-[15px]">
              There is nothing in your bag.Let&apos;s add some items.
            </p>
            <div
              className="grid place-items-center p-4"
              onClick={handleWishListToCart}
            >
              <button className="border-2 border-red-600/70 px-4 py-2 text-[14px] font-semibold text-red-600/70">
                Add Items from Wishlist
              </button>
            </div>
          </div>
        </div>
      ) : (
        <section className="m-10 grid grid-cols-2 overflow-hidden rounded-lg lg:grid-cols-3">
          <div className="col-span-2 bg-gray-400 lg:rounded-l-lg">
            <div className="flex items-center justify-between p-2 px-10 pt-10">
              <h3 className="text-[24px] font-400">Shopping Cart </h3>
              <div className="flex font-400">
                <p className="text-white">Sort by : </p>
                <select
                  name="sort"
                  id="sort"
                  className="bg-gray-400 outline-none"
                  onChange={handleSortChange}
                  value={sortOption}
                >
                  <option value="">Select</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="price_desc">Price (High to Low)</option>
                </select>
              </div>
            </div>

            {sortedProducts.map((product) => (
              <div key={product.id}>
                <div className="card m-8 flex items-center justify-between gap-4 rounded-xl border-2 border-gray-600/50 bg-gray-900/50 p-2">
                  <div className="flex items-center gap-12 p-2">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width="100px"
                      className="rounded-md"
                    />
                    <h1 className="hidden font-500 text-white lg:block">
                      {product.title}
                    </h1>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      className="text-[30px] font-600 text-white"
                      onClick={() => handleDecrementProduct(product)}
                    >
                      -
                    </button>
                    <div className="rounded-md bg-black p-2 text-white">
                      {product.quantity}
                    </div>
                    <button
                      className="text-[30px] font-600 text-white"
                      onClick={() => handleIncrementProduct(product)}
                    >
                      +
                    </button>
                  </div>

                  {/* price */}
                  <div>
                    <p className="text-[20px] font-600 text-white">
                      $ {product.price}
                    </p>
                  </div>

                  {/* Delete  */}
                  <div
                    className="cursor-pointer text-red-400"
                    onClick={() => handleDeleteProduct(product)}
                  >
                    <MdDelete size="30px" />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between">
              <Link to="/" className="m-8 flex items-center justify-between">
                <div className="flex space-x-3">
                  <FaArrowLeft size="30" className="text-white" />
                  <p className="text-[20px] font-500 text-white">
                    Back To Shop
                  </p>
                </div>
              </Link>
              <div className="m-8 cursor-pointer">
                <p
                  className="text-[20px] font-500 text-white"
                  onClick={handleClearAllProduct}
                >
                  Clear All
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-gray-600/80 lg:col-span-1 lg:rounded-r-lg">
            <h2 className="mb-4 px-10 pt-10 text-center text-[35px] font-500">
              Summery
              <hr />
            </h2>

            <div className="mb-4 flex justify-around text-[20px] font-500 text-white">
              <h3>Items {cartProduct.length}</h3>
              <p>$ {totalAmount.toFixed(2)}</p>
            </div>

            <div className="mb-5 px-12">
              <div className="mb-4">
                <label
                  htmlFor="coupon"
                  className="mb-2 block font-semibold text-gray-700"
                >
                  Coupon Code:
                </label>
                <input
                  type="text"
                  id="coupon"
                  name="coupon"
                  className="w-full rounded-lg border-none px-4 py-2 outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                  placeholder="Enter your coupon code"
                />
              </div>

              <div className="mb-2 text-center">
                <button className="rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-blue-600 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500">
                  Apply Coupon
                </button>
              </div>
              <hr />
            </div>

            <div className="mb-2 flex items-center justify-around gap-6">
              <h1 className="text-[20px] font-500 text-white">Shipping : </h1>
              <p className="text-[20px] font-500 text-white">free</p>
            </div>
            <div className="px-12">
              <hr />
            </div>

            <div className="mb-2 mt-2 flex items-center justify-around gap-6">
              <h1 className="text-[20px] font-500 text-white">Total : </h1>
              <p className="text-[20px] font-500 text-white">
                $ {totalAmount.toFixed(2)}
              </p>
            </div>
            <div className="px-12">
              <hr />
            </div>
            <div className="m-4 flex items-center justify-center">
              <button onClick={handleSubmit} className="rounded-lg border-none bg-green-500 px-4 py-2 text-white hover:bg-blue-600">
                Process to checkout
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
