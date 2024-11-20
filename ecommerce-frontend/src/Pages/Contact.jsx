import { IoCallOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form Submission Handler
  const onSubmit = (data) => {
    console.log('Contact Form Data:', data);

    // Success Toast
    toast.success('Thank you for contacting us! We will get back to you shortly.', {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      <section className="bg-white m-10 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 p-2">
          <div className="p-2 sm:p-10 font-300 block  col-span-3 sm:col-span-1 sm:h-full sm:justify-center  sm:flex sm:flex-col">
            {/* Call to Us Section */}
            <div className="flex justify-center sm:justify-start space-x-4 my-4 items-center">
              <div className="bg-red-500 rounded-full p-2">
                <IoCallOutline className="text-white" size="25px" />
              </div>
              <h3 className="font-500">Call To Us</h3>
            </div>
            <div className="contact-info text-center sm:text-start space-y-1 mb-4">
              <p className="text-[0.9rem]">We are available 24/7, 7 days a week.</p>
              <p className="text-[0.9rem]">
                <span className="font-semibold">Phone :</span> +91-9966265310
              </p>
            </div>
            <hr className="h-[1px] bg-gray-600 border-none" />

            {/* Write to Us Section */}
            <div className="flex space-x-4 justify-center sm:justify-start my-4 items-center">
              <div className="bg-red-500 rounded-full p-2">
                <IoMdMail className="text-white" size="25px" />
              </div>
              <h3 className="font-500">Write To Us</h3>
            </div>
            <div className="contact-info text-center sm:text-start space-y-1 mb-4">
              <p className="text-[0.9rem]">Fill out our form and we will contact you within 24 hours.</p>
              <p className="text-[0.9rem]">
                <span className="font-semibold">Emails :</span> customer@exclusive.com
              </p>
              <p className="text-[0.9rem]">
                <span className="font-semibold">Emails :</span> support@exclusive.com
              </p>
            </div>
          </div>

          <div className=" col-span-3 rounded-lg p-2">
            <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-md rounded-md">
              <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Enter a valid 10-digit phone number',
                      },
                    })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { required: 'Message is required' })}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    rows="4"
                    placeholder="Write your message here"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>

              {/* Toast Container */}
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
