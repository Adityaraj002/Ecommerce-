import { selectTotalAmount } from "@/redux/features/ProductCartSlice";
import { useDispatch, useSelector } from "react-redux";


const CheckoutDetails = () => {
  const cartproducts = useSelector((state) => state.product.product);
  const totalPrice = useSelector(selectTotalAmount)
  return (
    <section className="w-full lg:w-2/5">
      <div className="bg-gray-200 rounded-lg p-6">
        {cartproducts.map((product) => (
          <div className="space-y-4 mb-6" key={product.id}>
            <div className="flex gap-4">
              <div className="w-1/3 relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-4/5 object-cover rounded-lg"
                />
                <p className="bg-black relative bottom-[25%] left-[80%]  w-[40%] text-white text-center rounded-full">x {product.quantity}</p>
              </div>
              <div className="flex-1 justify-center space-y-2">
                <h6 className="text-sm font-medium">{product.title}</h6>
                <p className="text-xs font-medium text-orange-500">
                  ${product.price} <span className="text-gray-500 line-through"></span>
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* not map  */}
        <div className="flex justify-between border-t pt-4">
          <h6 className="text-sm font-medium">Shipping</h6>
          <p className="text-sm font-medium">$Free</p>
        </div>
        <div className="flex justify-between mt-2">
          <h6 className="text-sm font-medium">Total</h6>
          <p className="text-sm font-medium">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </section>
  );
};

export default CheckoutDetails;
