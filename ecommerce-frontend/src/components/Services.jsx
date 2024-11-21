import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


export const Services = () => {
  return (
    <>
      <div className="flex  items-center justify-center mt-10 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="fastService  p-2 mb-2 font-300">
            <div className="relative  mb-2">
              <LiaShippingFastSolid size='4rem' className="relative left-[40%]  border-[0.7rem] border-gray-400/60 bg-[#002D74] text-white rounded-full p-2" />
            </div>
            <h4 className="font-semibold text-[#002D74] text-center">Free and Fast delivery</h4>
            <p className="text-[.796rem] text-[#002D74] mt-1 leading-3 ">Free delivery for all order over $140</p>
          </div>
          <div className="CustomerService  p-2 mb-2 font-300">
            <div className="relative  mb-2">
              <RiCustomerService2Fill size='4rem' className="relative left-[40%]  border-[0.7rem] border-gray-400/60 bg-[#002D74] text-white rounded-full p-2" />
            </div>
            <h4 className="font-semibold text-[#002D74] text-center">Free and Fast delivery</h4>
            <p className="text-[.796rem] text-[#002D74] mt-1 leading-3 ">Free delivery for all order over $140</p>
          </div>
          <div className="MoneyBack   p-2 mb-2 font-300">
            <div className="relative  mb-2">
              <IoShieldCheckmarkOutline size='4rem' className="relative left-[40%]  border-[0.7rem] border-gray-400/60 bg-[#002D74] text-white rounded-full p-2" />
            </div>
            <h4 className="font-semibold text-[#002D74] text-center">Free and Fast delivery</h4>
            <p className="text-[.796rem] text-[#002D74] mt-1 leading-3 ">Free delivery for all order over $140</p>
          </div>
        </div>
      </div>
    </>
  )
}
