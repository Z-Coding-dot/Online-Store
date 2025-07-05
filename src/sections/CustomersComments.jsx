import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { FcOk } from "react-icons/fc";
import { Element } from "react-scroll"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Trefoil } from "ldrs/react";
import { useRef } from "react";

const CustomersComments = ({products}) => {
    
    const sliderRef = useRef(null);

    const allReviews = products.flatMap(product =>
    product.reviews.map(review => ({ ...review, productTitle: product.title })));

 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          arrows: true,
        }
      }
    ]
  };

  const nextSlide = () =>{
    sliderRef.current.slickNext()}
  const prevSlide = () => {
    sliderRef.current.slickPrev()}


  return (
    <section className="py-18 bg-white">
        <Element name="comments">
            <div className="container max-lg:px-4 px-30">
                <div className="flex justify-between mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-bold leading-6 tracking-tight">our happy customers</h1>
                    <div className="flex justify-center items-center">
                        <button onClick={prevSlide}
                         className="mx-3 hover:bg-gray-600 hover:text-white transition-all duration-500 px-4 py-2 rounded-full cursor-pointer"><FaArrowLeft/></button>
                        <button onClick={nextSlide}
                         className="mx-3 hover:bg-gray-600 hover:text-white transition-all duration-500 px-4 py-2 rounded-full cursor-pointer"><FaArrowRight/></button>
                    </div>
                </div>

                 <Slider ref={sliderRef} {...settings} className="gap-8">
                {allReviews.map((rev, index) =>(
                <div className="px-4 my-8">
                    <div key={index} className="max-w-[430px] min-h-[200px] border-1 border-gray-400 rounded-[20px] p-8 shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-500">
                        <p className="text-lg font-semibold mb-3">{'⭐'.repeat(rev.rating)}</p>
                        <div className="flex items-center mb-5">
                        <h3 className=" font-semibold text-xl ">{rev.reviewerName} </h3>
                        <FcOk  className="ml-2 size-6"/>
                        </div>
                        <p className="text-[16px] text-sm leading-6 text-gray-600 mb-4">{rev.comment}</p>
                    </div>
                    </div>
                    ))}
                </Slider>
            </div>
        </Element>
      
    </section>
  )
}

export default CustomersComments
