import {  useNavigate } from "react-router-dom"
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Wall from "@/components/Wall";
import { Services } from "@/components/services";


// <AiFillInstagram />
// <FaLinkedin />
// <FaTwitter />
const About = () => {
  const text = "Our Story"
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/");
  }
  return (
    <>
      <section className="m-10 bg-orange-300  rounded-lg overflow-hidden">
        <div className=" grid  sm:grid-cols-2 grid-cols-1  aspect-auto ">
          <div className="text-[1rem]   flex flex-col justify-center m-4 space-y-6">
            {/* <h1 className="text-[3rem] text-[#002c74d1]  font-semibold  m-2"></h1> */}
            <Wall text={text} />
            <p className="font-300 text-[#002D74]">Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in India. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p>
            <p className="font-300 text-[#002D74]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
            <div className="">
              <button onClick={handleNavigate} className=" rounded-xl bg-[#002D74] px-4 py-2 font-400 text-white duration-300 hover:scale-105">Shop now</button>
            </div>
          </div>
          <img src="/aboutpageimg.jpg" alt="" className="rounded-full p-2 mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3  m-10 gap-6">
          <div className="aspect-auto grid grid-cols-subgrid rounded-lg  bg-white  ">
            <img src="/actress1.jpg" alt=""  className="rounded-t-lg " />
            <h1 className="font-400 text-[2rem] text-[#002D74] ml-4">Name</h1>
            <p className="ml-4 text-[#002D74]">Founder & Chairman</p>
            <div className="flex m-4 gap-4">
              <AiFillInstagram size='25px' className="text-[#002D74]" />
              <FaLinkedin size='25px' className="text-[#002D74]" />
              <FaTwitter size='25px' className="text-[#002D74]" />
            </div>
          </div>
          <div className="aspect-auto grid grid-cols-subgrid rounded-lg bg-white  ">
            <img src="/actress2.jpg" alt="" className="rounded-t-lg" />
            <h1 className="font-400 text-[#002D74] text-[2rem] ml-4">Name</h1>
            <p className="ml-4 text-[#002D74]">Managing Director</p>
            <div className="flex m-4 gap-4">
              <AiFillInstagram size='25px' className="text-[#002D74]" />
              <FaLinkedin size='25px' className="text-[#002D74]" />
              <FaTwitter size='25px' className="text-[#002D74]" />
            </div>
          </div>
          <div className="aspect-auto grid grid-cols-subgrid rounded-lg bg-white ">
            <img src="/actress3.jpg" alt=""  className="rounded-t-lg" />
            <h1 className="font-400 text-[2rem] text-[#002D74] ml-4">Name</h1>
            <p className="ml-4 text-[#002D74]">Product Designer</p>
            <div className="flex m-4 gap-4">
              <AiFillInstagram size='25px' className="text-[#002D74]" />
              <FaLinkedin size='25px' className="text-[#002D74]" />
              <FaTwitter size='25px' className="text-[#002D74]" />
            </div>
          </div>
        </div>

        
      <Services />
      </section>
    </>
  )
}


export default About
