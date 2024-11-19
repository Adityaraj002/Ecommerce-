import { useForm } from "react-hook-form";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-6 bg-white rounded shadow-md"
    >
      {/* Contact Information */}
      <h6 className="text-sm font-semibold text-gray-700">Contact Information</h6>
      <div className="flex flex-col gap-4">
        {/* Email */}
        <div>
          <label htmlFor="checkout-email" className="block text-xs font-semibold">
            E-mail
          </label>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 fa fa-envelope" />
            <input
              type="email"
              id="checkout-email"
              placeholder="Enter your email..."
              className="w-full px-10 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="checkout-phone" className="block text-xs font-semibold">
            Phone
          </label>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 fa fa-phone" />
            <input
              type="tel"
              id="checkout-phone"
              placeholder="Enter your phone..."
              className="w-full px-10 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <h6 className="text-sm font-semibold text-gray-700">Shipping Address</h6>
      <div className="flex flex-col gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="checkout-name" className="block text-xs font-semibold">
            Full Name
          </label>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 fa fa-user-circle" />
            <input
              type="text"
              id="checkout-name"
              placeholder="Enter your name..."
              className="w-full px-10 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="checkout-address" className="block text-xs font-semibold">
            Address
          </label>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 fa fa-home" />
            <input
              type="text"
              id="checkout-address"
              placeholder="Your address..."
              className="w-full px-10 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>
            )}
          </div>
        </div>

        {/* City */}
        <div>
          <label htmlFor="checkout-city" className="block text-xs font-semibold">
            City
          </label>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 fa fa-building" />
            <input
              type="text"
              id="checkout-city"
              placeholder="Your city..."
              className="w-full px-10 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Country */}
        <div>
          <label htmlFor="checkout-country" className="block text-xs font-semibold">
            Country
          </label>
          <div className="relative">
            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500 fa fa-globe" />
            <input
              type="text"
              id="checkout-country"
              placeholder="Your country..."
              className="w-full px-10 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-400"
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && (
              <p className="mt-1 text-xs text-red-500">{errors.country.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Save Information */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="checkout-checkbox"
          className="w-4 h-4 border rounded"
          {...register("saveInfo")}
        />
        <label htmlFor="checkout-checkbox" className="text-xs font-semibold">
          Save this information for next time
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 text-sm font-medium text-white bg-orange-500 rounded hover:bg-orange-600"
      >
        Continue
      </button>
    </form>
  );
};

export default CheckoutForm;
