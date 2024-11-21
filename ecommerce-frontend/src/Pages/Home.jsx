import { ProductBanner } from "../components/ProductBanner";
import { CategoryMenu } from "../components/CategoryMenu";
import { ProductCard } from "../components/ProductCard";
import { Arivals } from "@/components/Arivals";
import { Services } from "@/components/services";



const products = [
  {
    id: 1,
    image:
      "https://i0.wp.com/365webresources.com/wp-content/uploads/2024/09/FREE-iPhone-16-16-Pro-Mockups.webp?w=1352&ssl=1",
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e49f7137ba7c0ccd.jpg?q=20",
  },
  {
    id: 3,
    image:
      "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
  },
  {
    id: 4,
    image:
      "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series-6-clock-face-memoji_09152020_inline.jpg.large.jpg",
  },
  {
    id: 5,
    image:
      "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg",
  },
  // Add more products as needed
];

const Home = () => {

  
  
   return (
     <>
       <div className="home-container bg-white">
         {/* Category Menu */}
         <div className="category-section ">
           <CategoryMenu />
         </div>

         {/* Product Banner */}
         <div className="product-banner-section">
          <ProductBanner products={products} />
         </div>

         {/* Product Card */}
         <div className="product-card-section">
           <ProductCard  />
         </div>
         
         {/* New Arivals  */}
         <div className="New-Arivals">
         <Arivals />
         </div>

         {/* Services  */}
         <div className="bg-orange-300 rounded-md m-10 p-2">
           <Services />
         </div>
       </div>
     </>
   );
}

export default Home
 