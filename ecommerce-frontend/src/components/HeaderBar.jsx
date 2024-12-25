import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
// import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { GoStar } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";
import { TbLogout2 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { IoLogIn } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// <GiHamburgerMenu />


export const HeaderBar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    setIsLogin((prevState) => !prevState)
  }

  const items = useSelector((state) => state.product.product);
  const likedItem = useSelector((state) => state.ProductWishlist.like);

  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked((prevState) => !prevState)
  }
  const onClose = useCallback(() => {
    setIsClicked(false);
  }, []);

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
      document.removeEventListener("mousedown", handleClickOutSide)
    }
  }, [onClose])

  const location = useLocation();

  const handleMyAccount = () => {
    navigate("/")
  }

  //condition to hide cart and wish list when user visite login or sign up page
  const hideCartAndWishList = location.pathname === "/signup" || location.pathname === '/login';
  //-----------------------------------------------------------------------------------P----------->

  return (
    <>
      <div className="border-b-2 border-blue-400 bg-[#fff]">
        <div className="xheader block lsm:flex justify-center px-2 pb-[0.2em] pt-[1.4em]">
          <div className="container flex items-center justify-between">
            {/* Hamburger menu for `sm` and below */}
            <div className="sm:hidden flex items-center">
              <button
                className="text-2xl focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
            {/* Logo */}
            <Link to="/" className="font-Poppins text-[1.5em] font-600">
              Exclusive
            </Link>

            {/* Hamburger menu */}
            <nav className="flex items-center justify-between p-4">
              {/* Regular Nav for `sm` and above */}
              <div className="nav hidden sm:flex items-center ">
                <ul className="flex items-center space-x-12 font-400 text-[#4f4444]">
                  <Link to="/" className="hover:border-b-2 hover:border-green-300/60">
                    <li>Home</li>
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:border-b-2 hover:border-green-300/60"
                  >
                    <li>Contact</li>
                  </Link>
                  <Link to="/about" className="hover:border-b-2 hover:border-green-300/60">
                    <li>About</li>
                  </Link>
                  <Link to="/signup" className="hover:border-b-2 hover:border-green-300/60">
                    <li>Sign up</li>
                  </Link>
                </ul>
              </div>

              {/* Dropdown menu for Hamburger */}
              {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden">
                  <ul className="flex flex-col items-start gap-4 p-4 font-400 text-[#4f4444]">
                    <Link
                      to="/"
                      className="hover:border-l-4 hover:border-green-300/60 pl-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <li>Home</li>
                    </Link>
                    <Link
                      to="/contact"
                      className="hover:border-l-4 hover:border-green-300/60 pl-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <li>Contact</li>
                    </Link>
                    <Link
                      to="/about"
                      className="hover:border-l-4 hover:border-green-300/60 pl-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <li>About</li>
                    </Link>
                    <Link
                      to="/signup"
                      className="hover:border-l-4 hover:border-green-300/60 pl-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <li>Sign up</li>
                    </Link>
                  </ul>
                </div>
              )}
            </nav>

            <div className="flex items-center space-x-4">
              {/* Cart and wish list */}
              <div className="hidden sm:flex items-center pr-2">
                <div className="cart flex justify-between items-center space-x-12 ">
                  {/* cart  */}
                  {!hideCartAndWishList && (
                    <>
                      <Link to="/cart" className="cart relative">
                        <IoCartOutline className="text-[25px]" />
                        {items.length > 0 && (
                          <span className="absolute right-4 -top-[0.55rem] flex h-5 w-5 items-center justify-center rounded-full bg-red-400 text-xs font-400 text-white">
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
                </div>
              </div>
              {/* User icon */}
              <div className="usericon pl-2">
                {/* <div className="relative"></div> */}
                <div
                  className={`usericon ${isClicked ? "bg-green-300/60" : "bg-transparent"} rounded-full p-2 relative`}
                  onClick={handleClick}
                  open={isClicked}
                >
                  <span className="font-Poppins text-[20px] font-800">
                    <FaRegUser />
                  </span>
                  {isClicked && (
                    <div className="profile-pop absolute right-0 z-50 mt-6 w-[225px] rounded-lg bg-white/30 shadow-lg backdrop-blur-lg transition-all duration-300">
                      <ul className="p-2">
                        {isLogin && (<Link
                          to="/myaccount"
                          className="hover:scale-50 mb-2 text-gray-700 hover:text-black"
                        >
                          <li className="flex gap-4" onClick={handleMyAccount}>
                            <FaRegUser className="text-[20px]" />
                            <p>Manage My Account</p>
                          </li>
                        </Link>)}
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
                        
                        {isLogin ? (<Link
                          to="/home"
                          className="mb-2 text-gray-700 hover:text-black"
                        >
                          <li className="flex gap-4">
                            <TbLogout2 className="text-[20px]" />
                            <p>Logout</p>
                          </li>
                        </Link>) : (<Link to="/login" className="mb-2 text-gray-700 hover:text-black">
                          <li className="flex gap-4">
                            <IoLogIn className="text-[20px]" />
                            <p>Login</p>
                          </li>
                        </Link>
                        )}
                        {/* cart */}
                        <Link to='/cart' className=" flex sm:hidden text-gray-700 hover:text-black">
                          <li className="flex gap-4">
                            <IoCartOutline className="text-[20px]" />
                            <p>Cart</p>
                          </li>
                        </Link>
                        {/* wishlist */}
                        <Link to='/wishlist' className="mb-2 flex sm:hidden text-gray-700 hover:text-black">
                          <li className="flex pl-[2px] items-center gap-4">
                            <FaRegHeart className="text-[1.1em]" />
                            <p>Wishlist</p>
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

        {/* Search bar */}
        <div className="flex justify-center items-center pt-2 pb-4">
          <div className="search mx-[1em] md:mx-[12em] w-full relative flex justify-center px-2 text-[16px] font-400">
            <input
              type="type"
              className=" w-full rounded-lg border-none bg-[#beb5b577] px-6 py-2 text-[#4f4444] outline-none"
              placeholder="What are you looking for?"
            />
            <IoSearchOutline className="text-[20px] pointer-events-none absolute end-4 top-1 font-Poppins font-700" size={"34px"} />
          </div>
        </div>
      </div>
    </>
  );
};



