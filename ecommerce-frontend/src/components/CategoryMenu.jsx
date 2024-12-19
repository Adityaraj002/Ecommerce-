import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const CategoryMenu = () => {
  return (
    <>
      <div className="xcategoryWarpped  bg-[#fff] py-1">
        <div className="individualCategory relative flex w-[100%] items-center justify-center gap-4 font-Poppins text-[0.9rem] font-400">
          {/* this code in index.css */}
          <div className="MensFashion Fashion categoryPopup group relative">
            <Link
              to="/mens"
              className="link flex px-4 py-2 font-semibold text-gray-700"
            >
              Mens
              <p>
                <RiArrowDownSLine className="arrowIcon" size={20} />
              </p>
            </Link>
            <div className="absolute z-10 hidden bg-white shadow-lg group-hover:block">
              <div className="flex space-x-8 px-2 py-4">
                {/* <!-- First Column -->*/}
                <div className="bg-white px-1">
                  <h3 className="mb-2 text-[15.5px] font-semibold">Footwear</h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Sports Shoes
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Casual Shoes
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Formal Shoes
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Sandals & Floaters
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Flip- Flops
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Loafers
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Boots
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Running Shoes
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Sneakers
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>

                {/* <!-- Second Column --> */}
                <div className="min-w-[150px] bg-[#ccc]/40 px-2">
                  <h3 className="mb-2 whitespace-nowrap text-[14.5px] font-semibold">
                    Men&apos;s Grooming
                  </h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Mobile Cases
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Headphones
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Power Banks
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>

                {/* <!-- Third Column --> */}
                <div className="bg-white p-1">
                  <h3 className="mb-2 text-[14.5px] font-semibold">Top wear</h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Gaming Laptops
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Desktop PCs
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Accessories
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>

                {/* <!-- Fourth Column --> */}
                <div className="bg-[#ccc]/40 p-1">
                  <h3 className="mb-2 text-[14.5px] font-semibold">
                    Winter Wear
                  </h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Bluetooth Speakers
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Home Theatres
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Soundbars
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Electronics */}
          <div className="Electronics categoryPopup group relative">
            <Link
              to="/electronics"
              className="link flex px-4 py-2 font-semibold text-gray-700"
            >
              Electronics
              <p>
                <RiArrowDownSLine className="arrowIcon" size={20} />
              </p>
            </Link>
            <div className="absolute z-10 hidden bg-white shadow-lg group-hover:block">
              <div className="flex space-x-8 p-4">
                {/* <!-- First Column --> */}
                <div className="bg-white p-1">
                  <h3 className="mb-2 text-[15.5px] font-semibold">Mobiles</h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Mi
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Realme
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Samsung
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Infinix
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        OPPO
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Apple
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Vivo
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Honor
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Asus
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Poco X2
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        realme Narzo 10
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>

                {/* <!-- Second Column --> */}
                <div className="bg-[#ccc]/40 p-1">
                  <h3 className="mb-2 text-[14.5px] font-semibold">
                    Mobile Accessories
                  </h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Mobile Cases
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Headphones
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Power Banks
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>

                {/* <!-- Third Column --> */}
                <div className="bg-white p-1">
                  <h3 className="mb-2 text-[14.5px] font-semibold">Laptops</h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Gaming Laptops
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Desktop PCs
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Accessories
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>

                {/* <!-- Fourth Column --> */}
                <div className="bg-[#ccc]/40 p-1">
                  <h3 className="mb-2 text-[14.5px] font-semibold">Speakers</h3>
                  <ul className="space-y-1 whitespace-nowrap text-[12.5px]">
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Bluetooth Speakers
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Home Theatres
                      </a>
                    </li>
                    <li className="pb-1">
                      <a href="#" className="text-gray-600 hover:text-blue-600">
                        Soundbars
                      </a>
                    </li>
                    {/* <!-- Add more items as needed --> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Home & LifeStyle */}
          <div className="HomeandLifestyle">Home & LifeStyle</div>
          <div className="Medicine">Medicine</div>
          <div className="SportsandOutdoor">Sports & Outdoor</div>
          <div className="HomeandLifestyle">Baby&apos;s & Toys</div>
          <div className="GroceriesandPets">Groceries & Pets</div>
          <div className="GroceriesandPets">Health & Beauty</div>
        </div>
      </div>
    </>
  );
};


/* 








Deodorants
Perfumes
Beard Care & Grooming
Shaving & Aftershave
Sexual Wellness



*/ 