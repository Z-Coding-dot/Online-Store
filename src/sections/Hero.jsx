import { brand } from "../constants/data"
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section>
      <Element name="hero">
        <div className="container max-lg:px-4 px-30 overflow-hidden">
          <div className="flex max-lg:flex-wrap flex-row items-center justify-between gap-20">
            <div className="mt-40 max-lg:mt-30 w-1/2 max-lg:w-auto mb-20">
              <h1 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 mb-5 text-base sm:text-lg">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="bg-black text-white px-4 py-3 rounded-full max-lg:w-full mb-5 w-52 text-[16px] hover:bg-gray-900 cursor-pointer">
                Shop Now
              </button>
              <div className="flex flex-wrap gap-10 md:gap-4 mt-10 max-lg:justify-center max-lg:mx-auto">
                {brand.map((item) => (
                  <div key={item.id}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
                      {item.price.toLocaleString()}+
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {item.descriptions}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 mx-auto">
              <div className="relative max-lg:-top-15 top-10">
                <img
                  src="/images/hero.png"
                  alt="hero image"
                  className="spin1 relative w-full h-auto object-contain top-0"
                />
                <img
                  src="/images/Vector.png"
                  alt="vector"
                  className="spin absolute top-0 right-0 z-10 w-25 max-lg:w-18 max-lg:bottom-20"
                />
                <img
                  src="/images/Vector.png"
                  alt="vector"
                  className="spin absolute top-30 left-0 z-10 w-15 max-lg:w-10"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
      <div className=" bg-black text-white h-[120px]">
        <div className="flex flex-wrap justify-around h-full w-full items-center uppercase  ">
          <h1 className="max-lg:text-[25px] text-3xl font-bold ">Versace</h1>
          <h1 className="max-lg:text-[30px] text-3xl tracking-tighter leading-1.2 ">
            zara
          </h1>
          <h1 className="max-lg:text-[35px] text-4xl ">gucci</h1>
          <h1 className="max-lg:text-[25px] text-3xl font-bold ">parada</h1>
          <h1 className="max-lg:text-[25px] text-3xl tracking-tighter">
            calvin klein
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero
