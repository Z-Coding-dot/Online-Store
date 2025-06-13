import React from 'react'

const UpFooter = () => {
  return (
    <div className="z-20 px-30 max-lg:px-4 -mt-10">
      <div
        className="container flex flex-row justify-between items-center max-lg:flex-col gap-5
       bg-black rounded-2xl h-auto py-5 px-10 max-lg:px-4"
      >
        <div className="lg:w-1/2 max-lg:px-4 max-lg:mt-5">
          <h1 className="uppercase text-white max-lg:text-4xl text-wrap text-5xl font-bold">
            stay upto date about our latest offers
          </h1>
        </div>
        <div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[349px] rounded-full px-4 py-3 text-gray-700 bg-white-100 focus:outline-none mb-3"
            />
          </div>
          <button className="w-[349px] rounded-full mb-3 px-4 py-3 text-gray-900 bg-white-100 hover:bg-black-100 hover:text-white transition-all duration-500 cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpFooter
