import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <img src='./pageNotFound.jpg' alt="Page not found" className="max-w-[22rem] mb-4" />
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 px-2 mt-2">Oops! The page you're looking for doesn't exist.</p>
      <button
        className="mt-5 px-6 py-2 bg-primary-600 border-2 border-red-600/70 text-red-600/70 font-semibold  rounded hover:bg-primary-700"
        onClick={() => navigate('/')}
      >
        Go Back to Home
      </button>
    </div>
  );
};

