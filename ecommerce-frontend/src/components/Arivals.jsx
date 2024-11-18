import React from 'react'

export const Arivals = () => {
  return (
    <>
      <div className="m-10 bg-white">
        <div className="Arrival space-y-5">
          <p className="arival-featured text-[16px] font-700 text-red-400">
            Featured
          </p>
          <h2 className="ml-[5px] text-[30px] font-500">New Arrivals</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* PS5 Section */}
          <div className="left-side ">
            <div className="relative h-[250px] md:h-[400px] bg-black m-2 rounded-md">
              {/* Text Content */}
              <div className="absolute z-10 bottom-6 left-4 text-white p-6 space-y-1">
                <h3 className="text-[1.623rem] font-medium">PlayStation 5</h3>
                <p className="text-[0.875rem] leading-8">
                  Black and White version of the PS5 Coming out on sales
                </p>
                <button className="border-b-[1px] my-2 font-medium">Shop Now</button>
              </div>
              <img
                src="/ps5.png"
                alt="PlayStation 5"
                className="absolute z-0 right-0 h-full max-w-[50%] object-cover"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="right-side grid grid-cols-1 gap-4 md:grid-rows-2">
            {/* Women's Collection */}
            <div className="relative bg-black rounded-md mx-2 mt-2 overflow-hidden h-[250px] md:h-full">
              <div className="absolute z-10 text-white p-4 space-y-1 top-1/2 left-5 transform -translate-y-1/2">
                <h3 className="text-[1.5rem] font-500 sm:text-[1.75rem] md:text-[2rem]">
                  Women's Collections
                </h3>
                <p className="w-[70%] text-[0.9rem]">
                  Featured women collections that give you another vibe.
                </p>
                <button className="border-b-[1px] my-2 font-400">Shop Now</button>
              </div>
              <img
                src="/women.png"
                alt="Women's Collection"
                className="absolute right-0 h-full object-cover scale-x-[-1] z-0"
              />
            </div>

            {/* Speakers and Gucci Section */}
            <div className="grid grid-cols-2 mx-2 pb-2 gap-2 h-[200px] md:h-full">
              {/* Amazon Speakers */}
              <div className="relative bg-black rounded-md">
                <img
                  src="/amazon.png"
                  alt="Amazon Speakers"
                  className="absolute right-[-30%] h-full object-contain z-0"
                />
                <div className="absolute z-10 bottom-4 left-4 text-white p-4 space-y-1">
                  <h3 className="text-[1.5rem]  font-500 sm:text-[1.50rem]">Speakers</h3>
                  <p className="w-[70%] text-[0.7rem]">
                    Amazon wireless speakers.
                  </p>
                  <button className="border-b-[1px] my-2 font-400">Shop Now</button>
                </div>
              </div>
              {/* Gucci */}
              <div className="relative bg-black rounded-md">
                <img
                  src="/gucci.png"
                  alt="Gucci"
                  className="absolute top-[10%] right-0 h-[80%] max-w-[90%] object-contain z-0"
                />
                <div className="absolute z-10 bottom-4 left-4 text-white p-4 space-y-1">
                  <h3 className="text-[1.5rem]  font-500 sm:text-[1.50rem]">Perfume</h3>
                  <p className="w-[70%] text-[0.7rem]">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className="border-b-[1px] my-2 font-400">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
