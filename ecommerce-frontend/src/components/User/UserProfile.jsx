import  { useState } from "react";

export const UserProfile = () => {
  const [activeSection, setActiveSection] = useState("userInfo");

  return (
    <div className="flex h-screen text-[#002D74] bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-lg font-semibold">User Profile</h2>
        </div>
        <nav className="mt-6 space-y-4">
          <button
            onClick={() => setActiveSection("userInfo")}
            className={`block px-4 py-2 text-left w-full text-[#002D74] hover:bg-gray-200 ${activeSection === "userInfo" ? "bg-gray-200 font-bold" : ""
              }`}
          >
            User Info
          </button>
          <div>
            <button
              onClick={() => setActiveSection("myOrders")}
              className={`block px-4 py-2 text-left w-full text-[#002D74] hover:bg-gray-200 ${activeSection === "myOrders" ? "bg-gray-200 font-bold" : ""
                }`}
            >
              My Orders
            </button>
            {activeSection === "myOrders" && (
              <div className="ml-4 text-[#002D74]">
                <button
                  onClick={() => setActiveSection("myReturns")}
                  className="block px-4 py-2 text-left w-full  hover:text-gray-700"
                >
                  My Returns
                </button>
                <button
                  onClick={() => setActiveSection("myCancellations")}
                  className="block px-4 py-2 text-left w-full  hover:text-gray-700"
                >
                  My Cancellations
                </button>
              </div>
            )}
          </div>
          <div>
            <button
              className="block bg-[#002D74] rounded-lg m-1 px-4 py-2  text-white hover:bg-[#002D74]/70"
            >
              Log Out
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 text-[#002D74] bg-gray-50">
        {activeSection === "userInfo" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">User Info</h1>
            <form>
              <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="Sara"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="Tancredi"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="sara.tancredi@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="(+98) 9123782167"
                  />
                </div>
                <div>
                  <label className="block p-2 text-sm font-medium text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g., New York, USA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mt-4 text-gray-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="mt-1 block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue="23728167"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 px-4 py-2 bg-[#002D74] text-white rounded-md hover:bg-[#002D74]/70"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

        {activeSection === "myOrders" && (
          <h1 className="text-2xl font-bold">My Orders Section</h1>
        )}
        {activeSection === "myReturns" && (
          <h1 className="text-2xl font-bold">My Returns Section</h1>
        )}
        {activeSection === "myCancellations" && (
          <h1 className="text-2xl font-bold">My Cancellations Section</h1>
        )}
      </div>
    </div>
  );
};

 
