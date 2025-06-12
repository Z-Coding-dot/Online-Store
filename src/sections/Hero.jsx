import { brand } from "../constants/data"
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <section>
      <Element name="/">
      <div className="container max-lg:px-4 px-30">
        <div className="flex max-lg:flex-wrap flex-row items-center justify-between gap-20">
          <div className="mt-40 max-lg:mt-30 w-1/2 max-lg:w-auto mb-20">
            <h1 className="text-black max-lg:text-6xl text-7xl font-bold tracking-tight mb-5">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-gray-600 mb-5">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white px-4 py-3 rounded-full max-lg:w-full mb-5 w-52 text-[16px] hover:bg-gray-900 cursor-pointer">
              Shop Now
            </button>
            <div className="flex flex-wrap gap-10 mt-10 max-lg:justify-center max-lg:mx-auto">
              {brand.map((item) => (
                <div key={item.id}>
                  <h2 className="max-lg:text-3xl text-4xl font-semibold mb-2">
                    {item.price.toLocaleString()}+
                  </h2>
                  <p className="text-gray-600 text-[16px] text-sm">
                    {item.descriptions}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="relative mt-30 max-lg:mt-0 ">
              <img
                src="/images/hero.png"
                alt="hero image"
                className="spin1 relative w-full h-full object-cover"
              />
              <img
                src="/images/Vector.png"
                alt="vector"
                className="spin absolute top-0 right-0 z-10 w-25"/>
              <img
                src="/images/Vector.png"
                alt="vector"
                className="spin absolute top-30 left-0 z-10 w-15"
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
