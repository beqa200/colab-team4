// import React from "react";

const PageNotFound = () => {
  return (
    <section className="relative z-10 bg-gradient-to-r from-red-400 via-orange-500 to-purple-600 py-[120px] animate-fadeIn">
      <div className="container mx-auto">
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="w-full max-w-[500px] p-8 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-cardBounce">
            <div className="text-center">
              <h2 className="mb-2 text-[60px] font-bold text-white sm:text-[80px] md:text-[100px] leading-tight animate-pulse">404</h2>
              <h4 className="mb-4 text-[24px] font-semibold text-white animate-fadeInDelay">Oops! Page Not Found</h4>
              <p className="mb-8 text-lg text-white opacity-80 animate-fadeInDelay">
                It looks like the page you are searching for doesn’t exist or has been moved.
              </p>
              <a
                href="/"
                className="inline-block rounded-lg bg-white bg-opacity-20 px-10 py-3 text-center text-base font-semibold text-white transition duration-300 ease-in-out transform hover:bg-opacity-40 hover:scale-110 animate-bounceButton"
              >
                Go To Home
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 flex items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
        <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-transparent animate-slideInLeft"></div>
        <div className="flex h-full w-1/3">
          <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-transparent animate-slideInRight"></div>
          <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-transparent animate-slideInRight"></div>
        </div>
        <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-transparent animate-slideInLeft"></div>
      </div>
    </section>
  );
};

export default PageNotFound;
