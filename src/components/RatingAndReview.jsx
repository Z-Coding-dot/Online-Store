import { FcOk } from "react-icons/fc";
const RatingAndReview = ({ product }) => {
  return (
    <section>
      <div className="px-30 max-lg:px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl max-lg:text-lg font-bold">
            All Reviews
            <span className="text-gray-400 font-normal max-lg:text-sm">
              ( {product?.reviews.length || 0})
            </span>
          </h2>
          <div className="flex gap-2">
            <button className="max-lg:hidden flex items-center border px-4 py-2 rounded-full text-gray-700 font-medium">
              Latest ▼
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full font-semibold">
              Write a Review
            </button>
          </div>
        </div>
        <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-6 my-5">
          {product.reviews.length > 0 ? (
            product.reviews.map((review, index) =>(
            <div key={index}
              className="max-w-[430px] min-h-[200px] border-1 border-gray-400 rounded-[20px] p-8 shadow-lg cursor-pointer hover:shadow-xl 
            hover:scale-105 transition-all duration-500">
              <p className="text-lg font-semibold mb-3">
                {"⭐".repeat(review.rating)}
              </p>
              <div className="flex items-center mb-5">
                <h3 className=" font-semibold text-xl ">
                  {review.reviewerName}
                </h3>
                <FcOk className="ml-2 size-6" />
              </div>
                {review.comment}
                <p className="text-[16px] text-sm leading-6 text-gray-600 mb-4"> 
              </p>
              <p className="text-gray-500 text-sm"><span>Posted on</span>: {new Date(review.date).toDateString()}</p>
            </div>))) : (<div> <h1>No Reviews Found!</h1></div>
          )}
        </div>

        <div className="flex justify-center">
          <button className="px-6 py-2 border rounded-full text-black font-semibold bg-white">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default RatingAndReview;
