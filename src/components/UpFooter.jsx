import { MdOutlineMail } from "react-icons/md";
import { Element } from "react-scroll";

const UpFooter = () => {
  return (
    <div className="z-20 px-30 max-lg:px-4 -mt-10">
      <Element name={"contact"}>
      <div
        className="container flex flex-row justify-between items-center max-lg:flex-col gap-5
       bg-black rounded-2xl h-auto py-5 px-10 max-lg:px-4"
      >
        <div className="w-1/2 max-lg:w-full max-lg:px-4 max-lg:mt-5">
          <h1 className="uppercase text-white text-2xl sm:text-3xl md:text-4xl font-bold text-wrap">
            stay upto date about our latest offers
          </h1>
        </div>
        <div className='max-lg:w-full w-[349px]'>
          <div className='relative'>
           <span className="absolute top-3 left-5"> <MdOutlineMail className="text-gray-800 font-bold text-medium size-6" /></span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full pr-4 pl-12 py-3 text-gray-700 bg-white-100 focus:outline-none mb-3"
            />
          </div>
          <button className="w-full rounded-full mb-3 px-7 py-3 text-gray-900 bg-white-100 hover:bg-black-100 hover:text-white transition-all duration-500 cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      </Element>
    </div>
  );
}

export default UpFooter
