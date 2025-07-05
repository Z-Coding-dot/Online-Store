import { Link } from "react-router-dom";
import { Link as LinkScroll, } from "react-scroll";

const YouMightLike = ({products}) => {


  return (
    <section className="min-h-screen bg-white">
      <div className="container px-30 max-lg:px-4 mx-auto py-10 mb-20 sm:mb-0">
        <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-10 text-center">
          You Might Also Like
        </h1>
        <div className="flex items-center gap-10 max-lg:overflow-x-scroll">
          {products.slice(12, 16).map((p) => (
            <div
              key={p.id}
              className="bg-white w-300 h-auto rounded-2xl shadow-sm p-4 hover:shadow-xl transition-all duration-500 
                      hover:scale-105 cursor-pointer">
              
              <Link to={`/details/${p.id}`}>
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-58 max-lg:h-auto object-contain rounded-lg bg-[#F0EEED]"
                />
              </Link> 
               <LinkScroll to="details" smooth spy offset={-100} > 
              <h4 className="mt-4 font-bold text-base sm:text-lg max-lg:line-clamp-1 max-lg:text-base">
                {p.title}
              </h4>
              <p className="flex gap-1 items-center mt-2 font-semibold max-lg:text-sm text-[18px]">
                {"⭐".repeat(Math.floor(p.rating))}
                {"☆".repeat(5 - Math.floor(p.rating))}
                <span className="text-md ml-2 font-bold">
                  {p.rating.toFixed(1)}
                </span>
              </p>
              <span className="flex gap-2 items-center max-lg:text-sm text-wrap">
                <p className="mt-2 font-bold text-lg">
                  $
                  {(p.price - (p.price * p.discountPercentage) / 100).toFixed(
                    2
                  )}
                </p>
                <del className="mt-2 text-lg font-bold text-gray-500">
                  ${p.price}
                </del>
                <p className="mt-2 text-sm font-semibold text-red-500 bg-red-200 px-2 rounded-full">
                  -{Math.floor(p.discountPercentage)}%
                </p>
              </span> </LinkScroll>      
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default YouMightLike
