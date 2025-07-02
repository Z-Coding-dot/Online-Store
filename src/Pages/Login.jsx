import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const toggle = () => {
        setShowPassword(!showPassword);
    }

  return (
    <section className="relative login-bg flex min-h-screen ">
      <div className="container absolute left-60 max-lg:left-0 max-lg:px-4 px-30 my-10">
        <h1 className="text-6xl font-bold text-center ml-40 max-lg:ml-0">Welcome!</h1>
        <form className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg mr-60 max-lg:mr-0">
        <h1 className="text-3xl font-bold text-[#030742] ">Sign Up</h1>
        <div className="flex flex-col mt-15 mb-4">

            <label htmlFor="name" className="uppercase text-[#030742] font-bold text-md">Full Name</label>
            <input type="text" placeholder="Your Name" className="p-2 mt-2 border-b-2 border-[#030742] text-[#030742] focus:outline-none"/>

            <label htmlFor="email" className="uppercase mt-3 text-[#030742] font-bold text-md">Email Address</label>
            <input type="email" placeholder="shop@gmail.com" className="p-2 mt-2 border-b-2 border-[#030742] text-[#030742] focus:outline-none"/>

            <div className="flex flex-col relative">
            <label htmlFor="password" className="uppercase mt-3 text-[#030742] font-bold text-md">Password</label>
            <input type={`${showPassword ? 'text' : 'password'}`} placeholder="*******" className="p-2 my-2 border-b-2 border-[#030742] text-[#030742] focus:outline-none"/>
            <span onClick={toggle} className="absolute right-5 bottom-6 cursor-pointer">{ showPassword ? <FaEye/> :  <FaEyeSlash/>}</span>
            </div>

            <div>
                <input type="checkbox" id="terms"/>
                <label htmlFor="terms" className="ml-2 text-[#030742] text-md cursor-pointer">I agree to the terms and conditions</label>
            </div>

            <div className="flex justify-evenly items-center mt-6">
                <button className="py-2 w-full mx-4 rounded-full bg-[#030742] text-white font-bold hover:bg-blue-950 cursor-pointer transition-colors duration-500">Sing Up</button>
                <button className="py-2 w-full mx-4 rounded-full text-[#030742] font-bold border border-[#030742] hover:bg-blue-950 hover:text-white cursor-pointer transition-colors duration-500">Login</button>
            </div>
        </div>
        </form>
      </div>
    </section>
  );
}

export default Login
