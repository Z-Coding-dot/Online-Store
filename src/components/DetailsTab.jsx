
const DetailsTab = ({product}) => {
  return (
    <section>
          <div className="flex justify-center">
            {product ? (
              <div className="flex justify-between max-lg:flex-col items-center ">
               <div className="w-1/2 max-lg:w-full px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{product.description}</p>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-xl font-bold text-black">${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</span>
                  <del className="text-xl text-gray-400">${product.price}</del>
                  <span className="px-3 py-1 bg-red-200 text-red-500 rounded-full text-sm font-semibold">-{Math.floor(product.discountPercentage)}% off</span>
                <p className="flex gap-1 items-center  font-semibold text-sm sm:text-base">
                    {"⭐".repeat(Math.floor(product.rating))}{" "}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                <span className="font-bold ml-3 text-md">
                {product.rating.toFixed(1)}
                    </span>
                 </p>
                </div>
               </div>
                <div className="max-lg:w-full">
                <img src={product.images[0]} alt={product.title} 
                className="w-110 h-auto object-contain rounded-lg mb-6 bg-white" />
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 text-xl">Product details not found.</div>
            )}
          </div>
      
    </section>
  )
}

export default DetailsTab
