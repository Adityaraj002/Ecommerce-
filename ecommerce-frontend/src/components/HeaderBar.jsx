import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { useCallback, useEffect, useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { GoStar } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";
import { TbLogout2 } from "react-icons/tb";
import { useSelector } from "react-redux";
// import { GiHamburgerMenu } from "react-icons/gi";
// <GiHamburgerMenu />


  export const HeaderBar = () => {
    const [isClicked, setIsClicked] = useState(false)

    const items = useSelector((state) => state.product.product);
    const likedItem = useSelector((state) => state.ProductWishlist.like);
   
    const navigate = useNavigate();
  
    const handleClick = () => {
      setIsClicked((prevState)=> !prevState)
    }
    const onClose = useCallback(() => {
      setIsClicked(false);
    },[]);

    useEffect(() => {
      const handleClickOutSide = (e) => {
        if (
          !e.target.closest(".usericon") &&
          !e.target.closest(".profile-pop")
        ) {
          onClose();
        }
      };

      document.addEventListener("mousedown", handleClickOutSide);

      return () => {
        document.removeEventListener("mousedown",handleClickOutSide)
      }
    },[onClose])
  
    const location = useLocation();

    const handleMyAccount = () => {
      navigate("/")
    }

    //condition to hide cart and wish list when user visite login or sign up page
    const hideCartAndWishList = location.pathname === "/signup" || location.pathname === '/login';
    //---------------------------------------------------------------------------------------------->

    return (
      <>
        <div className="border-b-2 border-blue-400 bg-[#fff]">
          <div className="xheader px-2 pb-[10px] pt-[22px]">
            <div className="containera flex items-center justify-between">
              <Link to="/" className="font-Poppins text-[1.5em] font-600">
                Exclusive
              </Link>
              <ul className="flex items-center gap-6 font-400 text-[#4f4444]">
                <Link
                  to="/"
                  className="hover:border-b-2 hover:border-green-300/60"
                >
                  <li>Home</li>
                </Link>
                <Link
                  to="/contact"
                  className="hover:border-b-2 hover:border-green-300/60"
                >
                  <li>Contact</li>
                </Link>
                <Link
                  to="/about"
                  className="hover:border-b-2 hover:border-green-300/60"
                >
                  <li>About</li>
                </Link>
                <Link
                  to="/signup"
                  className="hover:border-b-2 hover:border-green-300/60"
                >
                  <li>Sign up</li>
                </Link>
              </ul>

              <div className="search flex items-center gap-5">
                <div className="relative flex items-center text-[16px] font-400">
                  <input
                    type="type"
                    className="w-full rounded-lg border-none bg-[#beb5b577] px-6 py-2 text-[#4f4444] outline-none"
                    placeholder="What are you looking for?"
                  />
                  <div className="pointer-events-none absolute end-3 pl-2 font-Poppins font-700">
                    <IoSearchOutline className="text-[20px]" />
                  </div>
                </div>
                {/* cart  */}
                {!hideCartAndWishList && (
                  <>
                    <Link to="/cart" className="cart relative">
                      <IoCartOutline className="text-[25px]" />
                      {items.length > 0 && (
                        <span className="absolute -right-3 -top-[0.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-xs font-400 text-white">
                          {items.length}
                        </span>
                      )}
                    </Link>

                    <Link to="/wishlist" className="wishlist relative">
                      <FaRegHeart className="text-[20px]" />
                      {likedItem.length > 0 && (
                        <span className="absolute -right-3 -top-[0.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-xs font-400 text-white">
                          {likedItem.length}
                        </span>
                      )}
                    </Link>
                  </>
                )}

                <div className="relative">
                  <div
                    className={`usericon ${isClicked ? "bg-green-300/60" : "bg-transparent"} rounded-full p-2`}
                    onClick={handleClick}
                    open={isClicked}
                  >
                    <span className="font-Poppins text-[20px] font-800">
                      <CiUser />
                    </span>
                    {isClicked && (
                      <div className="profile-pop absolute right-0 z-50 mt-6 w-[225px] rounded-lg bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300">
                        <ul className="p-2">
                          <Link
                            to="/myaccount"
                            className="hover:scale-50 mb-2 text-gray-700 hover:text-black"
                          >
                            <li className="flex gap-4" onClick={handleMyAccount}>
                              <CiUser className="text-[20px]" />
                              <p>Manage My Account</p>
                            </li>
                          </Link>
                          <Link
                            to="/order"
                            className="mb-2 text-gray-700 hover:text-black"
                          >
                            <li className="flex gap-4">
                              <BsHandbagFill className="text-[20px]" />
                              <p> My Order</p>
                            </li>
                          </Link>
                          <Link
                            to="/cancellation"
                            className="mb-2 text-gray-700 hover:text-black"
                          >
                            <li className="flex gap-4">
                              <ImCancelCircle className="text-[20px]" />
                              <p>My Cancellations</p>
                            </li>
                          </Link>
                          <Link
                            to="reviews"
                            className="mb-2 text-gray-700 hover:text-black"
                          >
                            <li className="flex gap-4">
                              <GoStar className="text-[20px]" />
                              <p>My Reviews</p>
                            </li>
                          </Link>
                          <Link
                            to="/home"
                            className="mb-2 text-gray-700 hover:text-black"
                          >
                            <li className="flex gap-4">
                              <TbLogout2 className="text-[20px]" />
                              <p>Logout</p>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  
