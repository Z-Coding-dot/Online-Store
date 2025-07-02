import { useSelector, useDispatch } from "react-redux";
import {increaseQuantity, decreaseQuantity,removeFromCart,} from "../features/cartSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {Link} from "react-router-dom";


const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  if(cartItems.length === 0){
    return(
      <div className="container mx-auto mt-30 min-h-screen">
        <div className="text-center">
        <h2 className="text-3xl max-lg:text-xl text-center font-bold mb-4">Your Cart is Empty!</h2>
        <p className="text-md text-gray-600 text-center mb-4">You have No Items in Your Cart.
           Please Add some items before proceeding.</p>
         <Link to='/' className="text-blue-700 hover:text-blue-900 font-bold">
          Back to Shopping
        </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen my-30 overflow-hidden">
      <div className="container px-30 max-lg:px-4 mx-auto">
        <div className="flex max-lg:my-20 text-md text-gray-500 mb-8 gap-3">
          <Link to="/" className="hover:text-black">Home</Link>
          {' > '}
          <Link to="/cart" className="text-black">Cart</Link>
        </div>
      <h1 className="text-4xl font-bold mb-6">YOUR CART</h1>
      <div className="flex max-lg:flex-col gap-8">
        <div className="relative bg-white w-[715px] max-lg:w-full rounded-xl p-6">
          {cartItems.map((item) => (
            <div key={item.id} className="relative flex flex-wrap max-md:flex-col items-center border-b-1 border-gray-200 py-4">
              <img
                src={item.images?.[0] || item.thumbnail}
                alt={item.title}
                className="size-[124px] bg-[#F0EEED] object-cover rounded-lg mr-4"/>
              <div className="flex-1 relative">
                <h2 className="font-bold text-lg max-lg:text-sm">{item.title}</h2>
                <div className="text-sm text-gray-700 my-3">
                  <span className="text-md text-black font-semibold">Size:</span> {item.size || "Large"}
                  <br />
                  <span className="text-md text-black font-semibold">Color:</span> {item.color || "White"}
                </div>
                <div className="font-bold text-xl mt-2">${item.price}</div>
              </div>
              <div className="relative flex items-center rounded-full bg-[#F0EEED] mt-14">
                <button className="px-4 py-2 text-xl cursor-pointer font-bold" onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button className="px-4 py-2 text-xl cursor-pointer font-bold" onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>
              </div>
              <button
                className="relative ml-4 cursor-pointer text-red-500 "
                onClick={() => dispatch(removeFromCart(item.id))}>
                <RiDeleteBin6Fill className=" absolute -top-15 right-5 max-md:-top-90 max-md:left-22" /> 
              </button>
            </div>
          ))}
        </div>
        <div className="w-[505px] h-[400px] max-lg:w-full mx-auto bg-white rounded-xl p-6">
          <h2 className="font-bold text-xl mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Discount (-20%)</span>
            <span className="text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-500">Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <input
            className="w-full my-5 px-5 py-2 border rounded-full border-gray-200"
            placeholder="Add promo code"
          />
          <button className="w-full mt-2 bg-black text-white py-2 rounded-full hover:bg-gray-900 cursor-pointer">
            Go to Checkout →
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
