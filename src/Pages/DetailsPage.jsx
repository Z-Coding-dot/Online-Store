import { useParams } from 'react-router-dom';

const DetailsPage = ({products}) => {
  const { id } = useParams();
  const SelectedProduct = products.find((pro) => pro.id === parseInt(id));
  
  if (!SelectedProduct) return <div className='text-center mt-20 text-2xl font-bold'>Product not found.</div>;

  return (
    <section className="bg-white min-h-screen py-40 max-lg:p-4">
      <div className="container flex max-lg:flex-col max-lg:gap-4 justify-between gap-8 items-center mx-auto">
        <div className="max-lg:w-full flex items-center justify-center px-10 max-lg:mt-20">
          <div className="w-[444px] h-[530px] max-lg:w-full max-lg:h-auto px-4 rounded-3xl bg-[#F0EEED]">
            <img src={SelectedProduct.images[0]} alt={SelectedProduct.title} />
          </div>
        </div>

        <div className="max-lg:w-full flex flex-col max-lg:pb-10">
          <div className="px-10">
            <h1 className="text-4xl font-bold">{SelectedProduct.title}</h1>
            <p className="flex gap-1 items-center mt-2 font-semibold max-lg:text-sm text-[18px]">
              {"⭐".repeat(Math.floor(SelectedProduct.rating))}{" "}
              {"☆".repeat(5 - Math.floor(SelectedProduct.rating))}
              <span className="font-bold ml-3 text-md">
                {SelectedProduct.rating.toFixed(1)}
              </span>
            </p>
            <span className="flex gap-5 items-center">
              <h3 className="my-3 text-4xl font-semibold">
                 ${(SelectedProduct.price - (SelectedProduct.price * SelectedProduct.discountPercentage / 100)).toFixed(2)}
              </h3>
              <del className="my-3 text-4xl font-semibold text-gray-500">
                ${SelectedProduct.price}
              </del>
              <p className="px-3 py-1 bg-red-200 rounded-full text-red-500">
               -{(Math.floor(SelectedProduct.discountPercentage))}% off
              </p>
            </span>
            <p className="text-xl font-medium text-gray-600 my-3">
              {SelectedProduct.description}
            </p>
            <hr className="text-gray-300 my-5 text-sm" />
            <div>
              <h2 className="text-2xl text-gray-600 my-3">Select Colors</h2>
              <span className="flex gap-4 items-center mt-3">
                <input
                  type="color"
                  className="size-[37px] rounded-full border border-gray-300 appearance-none p-0 cursor-pointer custom-color"
                />
                <input
                  type="color"
                  className="size-[37px] rounded-full border border-gray-300 appearance-none p-0 cursor-pointer custom-color"
                />
                <input
                  type="color"
                  className="size-[37px] rounded-full border border-gray-300 appearance-none p-0 cursor-pointer custom-color"
                />
              </span>
            </div>
            <hr className="text-gray-300 my-5 text-sm" />

            <h2 className="text-2xl text-gray-600 my-3">Choose Size</h2>
            <div className="flex gap-5 items-center mt-3">
              <button
                className="px-4 py-2 rounded-full bg-gray-200 text-lg max-lg:text-xs text-gray-600
               hover:text-white hover:bg-black cursor-pointer transition-all duration-500"
              >
                Small
              </button>
              <button
                className="px-4 py-2 rounded-full bg-gray-200 text-lg max-lg:text-xs text-gray-600
               hover:text-white hover:bg-black cursor-pointer transition-all duration-500"
              >
                Medium
              </button>
              <button
                className="px-4 py-2 rounded-full bg-gray-200 text-lg max-lg:text-xs text-gray-600
               hover:text-white hover:bg-black cursor-pointer transition-all duration-500"
              >
                Large
              </button>
              <button
                className="px-4 py-2 rounded-full bg-gray-200 text-lg max-lg:text-xs text-gray-600
               hover:text-white hover:bg-black cursor-pointer transition-all duration-500"
              >
                X-Large
              </button>
            </div>
            <hr className="text-gray-300 my-5 text-sm" />

            <div className="flex mb-5">
              <div className="flex items-center justify-between w-[170px] h-[52px] max-lg:h-[44px] bg-gray-200 rounded-full px-5 py-3">
                <button className="text-2xl font-bold cursor-pointer">-</button>
                <p className="text-2xl font-bold">1</p>
                <button className="text-2xl font-bold cursor-pointer">+</button>
              </div>
              <button className="w-[400px] h-[52px] max-lg:h-[44px] text-medium
               ml-5 bg-black text-white rounded-full hover:bg-gray-950 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
