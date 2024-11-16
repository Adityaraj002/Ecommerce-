import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-black text-white">
        {/* content */}
        <div
          className={`mx-[4rem] hidden gap-[6rem] sm:grid sm:grid-cols-2 lg:grid-cols-4`}
        >
          <div className="grid w-full grid-cols-1 space-y-4 sm:my-8">
            <h1 className="text-center sm:text-start">
              <a href="" className="text-3xl font-semibold">
                Exclusive
              </a>
            </h1>
            <h3 className="text-center text-xl font-semibold sm:text-start">
              Subscribe
            </h3>
            <h5 className="text-center sm:text-start">
              Get 10% off your first order
            </h5>
            <form
              action=""
              className="relative flex items-center justify-center gap-2 sm:justify-start"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-4 rounded-lg border-2 border-white bg-black px-4 py-2 ring-white focus:outline-none focus:ring-0"
              />
              <button className="mt-2 flex items-center justify-center">
                <svg
                  width="27px"
                  height="27px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="gird my-8 grid-cols-1 space-y-4">
            <h1 className="text-center text-2xl font-semibold sm:text-start">
              Support
            </h1>
            <p className="text-center sm:text-start">
              276 Begumpur, Rohini sector-22 <br /> New Delhi-110086, India
            </p>
            <h4 className="text-center sm:text-start">exclusive@gmail.com</h4>
            <p className="text-center sm:text-start">+91 99-99-46-02-62</p>
          </div>
          <div className="grid w-full grid-cols-1 space-y-2 sm:my-8">
            <h1 className="text-center text-2xl font-semibold sm:text-start">
              Account
            </h1>
            <p className="text-center sm:text-start">My Account</p>
            <h4 className="text-center sm:text-start">login / Register</h4>
            <p className="text-center sm:text-start">Cart</p>
            <p className="text-center sm:text-start">Wishlist</p>
            <p className="text-center sm:text-start">Shop</p>
          </div>

          <div className="my-8 grid grid-cols-1 space-y-4">
            <h1 className="text-center text-2xl font-semibold sm:text-start">
              Download App
            </h1>
            <p className="text-center text-[12px] opacity-50 sm:text-start">
              Save $3 with App New User Only
            </p>
            <div className="grid grid-cols-2 gap-2">
              {/* QR code */}
              <img src="/qrCode.svg" alt="" />
              <div className="space-y-2">
                <Link className="flex gap-1 rounded-md border-2 px-[0.15rem] py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1"
                      x1="18.102"
                      x2="25.297"
                      y1="3.244"
                      y2="34.74"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#35ab4a"></stop>
                      <stop offset=".297" stopColor="#31a145"></stop>
                      <stop offset=".798" stopColor="#288739"></stop>
                      <stop offset="1" stopColor="#237a33"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)"
                      d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"
                    ></path>
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2"
                      x1="19.158"
                      x2="21.194"
                      y1="23.862"
                      y2="66.931"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#f14e5d"></stop>
                      <stop offset=".499" stopColor="#ea3d4f"></stop>
                      <stop offset="1" stopColor="#e12138"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)"
                      d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"
                    ></path>
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3"
                      x1="32.943"
                      x2="36.541"
                      y1="14.899"
                      y2="43.612"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffd844"></stop>
                      <stop offset=".519" stopColor="#ffc63f"></stop>
                      <stop offset="1" stopColor="#ffb03a"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)"
                      d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"
                    ></path>
                    <linearGradient
                      id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4"
                      x1="13.853"
                      x2="15.572"
                      y1="5.901"
                      y2="42.811"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset=".003" stopColor="#0090e6"></stop>
                      <stop offset="1" stopColor="#0065a0"></stop>
                    </linearGradient>
                    <path
                      fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)"
                      d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"
                    ></path>
                  </svg>
                  <div>
                    <p className="text-center text-[8px]">GET IT ON</p>
                    <p className="text-nowrap text-[10px] font-500">
                      Google Play
                    </p>
                  </div>
                </Link>
                <Link className="flex gap-1 rounded-md border-2 px-[0.15rem] py-1">
                  <svg
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25px"
                    height="25px"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 33.375 0 C 30.539063 0.191406 27.503906 1.878906 25.625 4.15625 C 23.980469 6.160156 22.601563 9.101563 23.125 12.15625 C 22.65625 12.011719 22.230469 11.996094 21.71875 11.8125 C 20.324219 11.316406 18.730469 10.78125 16.75 10.78125 C 12.816406 10.78125 8.789063 13.121094 6.25 17.03125 C 2.554688 22.710938 3.296875 32.707031 8.90625 41.25 C 9.894531 42.75 11.046875 44.386719 12.46875 45.6875 C 13.890625 46.988281 15.609375 47.980469 17.625 48 C 19.347656 48.019531 20.546875 47.445313 21.625 46.96875 C 22.703125 46.492188 23.707031 46.070313 25.59375 46.0625 C 25.605469 46.0625 25.613281 46.0625 25.625 46.0625 C 27.503906 46.046875 28.476563 46.460938 29.53125 46.9375 C 30.585938 47.414063 31.773438 48.015625 33.5 48 C 35.554688 47.984375 37.300781 46.859375 38.75 45.46875 C 40.199219 44.078125 41.390625 42.371094 42.375 40.875 C 43.785156 38.726563 44.351563 37.554688 45.4375 35.15625 C 45.550781 34.90625 45.554688 34.617188 45.445313 34.363281 C 45.339844 34.109375 45.132813 33.910156 44.875 33.8125 C 41.320313 32.46875 39.292969 29.324219 39 26 C 38.707031 22.675781 40.113281 19.253906 43.65625 17.3125 C 43.917969 17.171875 44.101563 16.925781 44.164063 16.636719 C 44.222656 16.347656 44.152344 16.042969 43.96875 15.8125 C 41.425781 12.652344 37.847656 10.78125 34.34375 10.78125 C 32.109375 10.78125 30.46875 11.308594 29.125 11.8125 C 28.902344 11.898438 28.738281 11.890625 28.53125 11.96875 C 29.894531 11.25 31.097656 10.253906 32 9.09375 C 33.640625 6.988281 34.90625 3.992188 34.4375 0.84375 C 34.359375 0.328125 33.894531 -0.0390625 33.375 0 Z M 32.3125 2.375 C 32.246094 4.394531 31.554688 6.371094 30.40625 7.84375 C 29.203125 9.390625 27.179688 10.460938 25.21875 10.78125 C 25.253906 8.839844 26.019531 6.828125 27.1875 5.40625 C 28.414063 3.921875 30.445313 2.851563 32.3125 2.375 Z M 16.75 12.78125 C 18.363281 12.78125 19.65625 13.199219 21.03125 13.6875 C 22.40625 14.175781 23.855469 14.75 25.5625 14.75 C 27.230469 14.75 28.550781 14.171875 29.84375 13.6875 C 31.136719 13.203125 32.425781 12.78125 34.34375 12.78125 C 36.847656 12.78125 39.554688 14.082031 41.6875 16.34375 C 38.273438 18.753906 36.675781 22.511719 37 26.15625 C 37.324219 29.839844 39.542969 33.335938 43.1875 35.15625 C 42.398438 36.875 41.878906 38.011719 40.71875 39.78125 C 39.761719 41.238281 38.625 42.832031 37.375 44.03125 C 36.125 45.230469 34.800781 45.988281 33.46875 46 C 32.183594 46.011719 31.453125 45.628906 30.34375 45.125 C 29.234375 44.621094 27.800781 44.042969 25.59375 44.0625 C 23.390625 44.074219 21.9375 44.628906 20.8125 45.125 C 19.6875 45.621094 18.949219 46.011719 17.65625 46 C 16.289063 45.988281 15.019531 45.324219 13.8125 44.21875 C 12.605469 43.113281 11.515625 41.605469 10.5625 40.15625 C 5.3125 32.15625 4.890625 22.757813 7.90625 18.125 C 10.117188 14.722656 13.628906 12.78125 16.75 12.78125 Z"></path>
                  </svg>
                  <div>
                    <p className="text-nowrap text-center text-[8px]">
                      Download on
                    </p>
                    <p className="text-[10px] font-500">App Store</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* copy write */}
        <div className="w-full border-t-2 bg-black py-4 text-white">
          <div className="mx-[4rem] flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Exclusive. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link to="/privacypolicy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer