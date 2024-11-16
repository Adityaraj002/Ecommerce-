import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PropTypes from "prop-types";  

export const ProductBanner = ({products}) => {

 
  return (
    <>
      <section className="bg-[#fff] p-2">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
          className="product-slide flex flex-col items-center"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="Product-bannder relative pt-6">
                <div className="productImg relative h-[300px]  object-cover">
                  <img
                    src={product.image}
                    alt=""
                    className="absolute left-0 top-[0%] z-0 h-full w-full rounded-xl"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

{
  /* <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // slidesPerView={3}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="product-slide flex flex-col items-center"
        >
          {products.length > 0 ? (
            products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="product-slide flex flex-col items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image mb-[20px] max-w-[300px] rounded-[8px]"
                  />
                  <div className="product-info text-center">
                    <h2 className="product-name mb-[10px] text-[1.5rem] font-700">
                      {product.name}
                    </h2>
                    <p className="product-price mb-[20px] text-[1.5rem]">
                      ${product.price}
                    </p>
                    <button className="product-btn cursor-pointer rounded-[5px] bg-[#007bff] px-[20px] py-[10px] text-[1rem] text-[#fff] transition-all hover:bg-[#0056b3]">
                      Shop Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="product-slide flex flex-col items-center">
                <div className="product-info text-center">
                  <h2 className="product-name mb-[10px] text-[1.5rem] font-700">
                    No Products Available
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper> */
}

ProductBanner.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired, // The `products` prop itself is required
};