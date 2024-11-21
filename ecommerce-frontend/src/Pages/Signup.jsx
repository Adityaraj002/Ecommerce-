import {Link} from 'react-router-dom'
export const Signup = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 p-10">
      <div className="flex max-w-3xl items-center rounded-2xl bg-orange-300 p-5 shadow-lg">
        <div className="hidden w-1/2 rounded-2xl shadow-md shadow-slate-600 md:block">
          <img
            src="https://images.pexels.com/photos/29003596/pexels-photo-29003596/free-photo-of-close-up-of-modern-metallic-cross-pendant.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-2xl"
          />
        </div>

        <div className="px-8 md:w-1/2">
          <h2 className="text-3xl font-700 text-[#002D74]">Signup</h2>
          <p className="mt-4 text-sm font-300 text-[#002D74]">
            Welcome to Explusive
          </p>
          <form action="" className="flex flex-col gap-4">
            <input
              className="mt-8 rounded-xl p-[.5rem] outline-none"
              type="text"
              name="Fullname"
              placeholder="Fullname"
            />
            <input
              className="rounded-xl p-[.5rem] outline-none"
              type="text"
              name="username"
              placeholder="username"
            />
            <input
              className="rounded-xl p-[.5rem] outline-none"
              type="text"
              name="email"
              placeholder="email or phoneNo"
            />
            <input
              className="rounded-xl p-[.5rem] outline-none"
              type="password"
              name="password"
              placeholder="password"
            />
            <button className="rounded-xl  bg-[#002D74] py-2 font-400 text-white duration-300 hover:scale-105">
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center">or</p>
            <hr className="border-gray-500" />
          </div>

          <button className="mt-4 flex w-full items-center justify-center rounded-xl bg-white py-2 text-sm text-[#002D74] font-500 duration-300 hover:scale-105">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Google
          </button>

          <div className="mt-4 items-center justify-between text-xs font-300 md:flex">
            <p className='text-[#002D74] font-400'>If you already have account?</p>
            <Link
              to="/login"
              className="mt-2 w-full rounded-xl text-[#002D74] font-500 bg-white px-5 py-2 duration-300 hover:scale-105 md:mt-0 md:w-1/2"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
