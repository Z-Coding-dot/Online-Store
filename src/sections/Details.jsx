import { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../features/cartSlice';
import { Element } from 'react-scroll';

const Details = ({products}) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const SelectedProduct = products.find((pro) => pro.id === parseInt(id));
  

  const [mainImage, setMainImage] = useState(SelectedProduct?.images[0])
  const [selectSize, setSelectSize] = useState('Large');
  const [selectedColor, setSelectedColor] = useState('#5D6D7E');
  const [quantity, setQuantity] = useState(1);

  const colors = ['#5D6D7E', '#2E4053', '#A9CCE3'];
  const sizes =  ['Small', 'Medium', 'Large', 'X-Large']

  const handleAddToCart = () => {
  const payload = {
    ...SelectedProduct, quantity: quantity };
  dispatch(addToCart(payload));
};
 
  const increaseItems = () =>{
    setQuantity((prev) => prev + 1)
  };
  const decreaseItems = () => {
    setQuantity((prev) => prev > 1 ? prev - 1 : 1)
  };


  if (!SelectedProduct) return <div className='text-center mt-20 text-2xl font-bold'>Product not found.</div>;

  return (
    <section className="bg-white min-h-screen py-30 max-lg:p-4 px-30">
      <Element name='details' >
          {/* Breadcrumbs */}
        <div className="flex max-lg:mt-20 text-sm text-gray-500 mb-8 gap-3">
          <Link to="/" className="hover:text-black">Home</Link>
          {' > '}
          <Link to="/men" className="hover:text-black">{SelectedProduct.category}</Link>
          {' > '}
          <span className="font-semibold text-black">{SelectedProduct.title}</span>
        </div>  
      <div className="container flex max-lg:flex-col max-lg:gap-4 justify-between  items-center mx-auto">
        <div className="max-lg:w-full flex max-lg:flex-col-reverse items-center justify-center">
           <div className="flex flex-col max-lg:flex-row gap-2 mr-4 justify-center">
              {SelectedProduct.images.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className={`w-[152px] h-[167px] max-lg:w-[110px] max-lg:h-auto max-lg:my-5 bg-[#F0EEED] rounded-lg cursor-pointer flex items-center justify-center p-2 ${mainImage === image ? 'border-2 border-black' : ''}`}
                  onClick={() => setMainImage(image)}>
                  <img src={image} alt={`thumbnail ${index + 1}`} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          <div className="w-[444px] h-[530px] flex items-center  justify-center max-lg:w-full max-lg:h-auto px-4 rounded-3xl bg-[#F0EEED]">
            <img src={mainImage} alt={SelectedProduct.title}/>
          </div>
        </div>


        <div className="max-lg:w-full flex flex-col max-lg:pb-10">
          <div className="px-10">
            <h1 className="text-4xl max-lg:text-2xl font-bold">{SelectedProduct.title}</h1>
            <p className="flex gap-1 items-center mt-2 font-semibold max-lg:text-sm text-[18px]">
              {"⭐".repeat(Math.floor(SelectedProduct.rating))}{" "}
              {"☆".repeat(5 - Math.floor(SelectedProduct.rating))}
              <span className="font-bold ml-3 text-md">
                {SelectedProduct.rating.toFixed(1)}
              </span>
            </p>
            <span className="flex gap-5 items-center">
              <h3 className="my-3 text-4xl max-lg:text-xl font-semibold">
                 ${(SelectedProduct.price - (SelectedProduct.price * SelectedProduct.discountPercentage / 100)).toFixed(2)}
              </h3>
              <del className="my-3 text-4xl max-lg:text-xl font-semibold text-gray-500">
                ${SelectedProduct.price}
              </del>
              <p className="px-3 max-lg:text-xs max-lg:px-2 py-1 bg-red-200 rounded-full text-red-500">
               -{(Math.floor(SelectedProduct.discountPercentage))}% off
              </p>
            </span>
            <p className="text-xl max-lg:text-sm font-medium text-gray-600 my-3">
              {SelectedProduct.description}
            </p>
            <hr className="text-gray-300 my-5 text-sm" />
            <div>
              <h2 className="text-2xl text-gray-600 my-3">Select Colors</h2>
              <div className="flex gap-4 items-center mt-3">
                 {colors.map((color) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                    className={`w-9 h-9 rounded-full cursor-pointer ${selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <hr className="text-gray-300 my-5 text-sm" />

            <h2 className="text-2xl text-gray-600 my-3">Choose Size</h2>
            <div className="flex flex-wrap gap-5 items-center mt-3">
              {sizes.map((size, index) => (
                <div key={index}>
              <button onClick={() => setSelectSize(size)}
                className={`px-4 py-2 rounded-full text-lg max-lg:text-xs cursor-pointer hover:bg-black hover:text-white
                 ${selectSize === size ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'} transition-all duration-500`}>
                {size}
              </button>
                </div>
              ))}

            </div>
            <hr className="text-gray-300 my-5 text-sm" />

            <div className="flex mb-5">
              <div className="flex items-center justify-between w-[170px] h-[52px] max-lg:h-[44px] bg-gray-200 rounded-full px-5 py-3">
                <button onClick={decreaseItems} className="text-2xl font-bold cursor-pointer">-</button>
                <p className="text-2xl font-bold">{quantity}</p>
                <button onClick={increaseItems} className="text-2xl font-bold cursor-pointer">+</button>
              </div>
              <button onClick={handleAddToCart}
               className="w-[400px] h-[52px] max-lg:h-[44px] text-medium
               ml-5 bg-black text-white rounded-full hover:bg-gray-950 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      </Element>
    </section>
  );
};

export default Details;
