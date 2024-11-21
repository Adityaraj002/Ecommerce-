import React from "react";

const ProductDetail = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16 bg-gray-100">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Images Section */}
        <div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/path-to-main-image.jpg"
              alt="Boa Fleece Jacket"
              className="w-full h-auto"
            />
          </div>
          <div className="flex space-x-2 mt-4">
            <img
              src="/path-to-image1.jpg"
              alt="Side View 1"
              className="w-20 h-20 rounded shadow"
            />
            <img
              src="/path-to-image2.jpg"
              alt="Side View 2"
              className="w-20 h-20 rounded shadow"
            />
            <img
              src="/path-to-image3.jpg"
              alt="Side View 3"
              className="w-20 h-20 rounded shadow"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Boa Fleece Jacket</h2>
          <p className="text-gray-500 text-sm">Jolt/Jackets</p>

          {/* Pricing */}
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold text-black">$122.00</span>
            <span className="line-through text-gray-500">$129.00</span>
            <span className="text-green-600 text-sm">5% Disc</span>
          </div>

          {/* Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1 text-yellow-500">
              ★★★★☆
            </div>
            <span className="text-sm text-gray-500">(4.9, 1.2K Reviews)</span>
          </div>

          {/* Colors */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">Available Colors</h3>
            <div className="flex space-x-2 mt-2">
              <div className="w-6 h-6 rounded-full bg-black"></div>
              <div className="w-6 h-6 rounded-full bg-blue-700"></div>
              <div className="w-6 h-6 rounded-full bg-green-700"></div>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-sm font-bold text-gray-700">Size</h3>
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
            <button className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-gray-300 text-black rounded hover:bg-gray-400">
              Checkout Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h3 className="text-xl font-bold">This item can be cool with this</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { name: "Adidas x Jolt", price: "$349.00" },
            { name: "P.S Cap", price: "$49.00" },
            { name: "OS Beanie", price: "$20.00" },
            { name: "NH X HexKnox Tote", price: "$39.90" },
          ].map((item) => (
            <div
              key={item.name}
              className="p-4 bg-white rounded shadow text-center"
            >
              <img
                src="/path-to-related-product.jpg"
                alt={item.name}
                className="w-full h-auto rounded"
              />
              <h4 className="mt-2 text-sm font-semibold">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
