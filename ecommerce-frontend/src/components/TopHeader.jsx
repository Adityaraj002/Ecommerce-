import { RiArrowDropDownLine } from "react-icons/ri";
export const TopHeader = () => {
  return (
    <>
      <div className="topHeader relative hidden h-[1.8rem] w-[100%] items-center justify-center bg-[#000000] md:flex">
        <div className="thcontainer text-[#fff]">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span className="mx-4 border-b-2 border-[#fff] font-500">
              ShopNow
            </span>
          </p>
        </div>
        <div className="absolute right-12 flex items-center font-Poppins font-200 text-[#fff] md:hidden lg:flex">
          English
          <p className="text-[35px]">
            <RiArrowDropDownLine />
          </p>
        </div>
      </div>
    </>
  );
};
