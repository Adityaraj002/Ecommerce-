import CheckoutForm from "../components/CheckoutForm";
import CheckoutDetails from "../components/CheckoutDetails";

export const Checkout = () => {
  
  return (

    <div className="font-poppins min-h-screen bg-white w-4/5 mx-auto p-12 text-gray-700">
      <header className="mb-8">
        <h3 className="text-xl font-medium">Checkout</h3>
      </header>
      <main className="flex flex-col lg:flex-row gap-10">
        <CheckoutForm />
        <CheckoutDetails />
      </main>
    </div>
  );
};


