import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link  } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
     const [showPassword, setShowPassword] = useState(false);
        const toggle = () => {
            setShowPassword(!showPassword);
          }
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    });

    const {  register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        console.log(data);
        console.log("Form submitted successfully!");
    }

  return (
    <section className="login-bg overflow-hidden">
          <div className="container absolute left-60 max-lg:left-0 max-lg:px-4 px-30 mt-10">
            <h1 className="text-6xl max-sm:text-3xl font-bold text-center ml-70 max-lg:ml-0 text-[#030742]">Welcome! Back</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-10  max-md:mt-4 p-8 rounded-lg mr-60 max-lg:mr-0">
            <h1 className="text-3xl font-bold text-[#030742] ">Login</h1>
            <div className="flex flex-col mt-15 max-md:mt-5 mb-4">
                <label htmlFor="email" className="uppercase text-[#030742] font-bold text-md max-md:text-sm">Email</label>
                  <p className="text-sm text-red-500 ">{errors.email?.message}</p>
                <input type="email" placeholder="Your Name" {...register("email")} className="p-2 mt-2 border-b-2 max-md:text-sm border-[#030742] text-[#030742] focus:outline-none"/>
    
                <div className="flex flex-col relative">
                <label htmlFor="password" className="uppercase mt-3 text-[#030742] font-bold text-md max-md:text-sm">Password</label>
                <p className="text-sm text-red-500">{errors.password?.message}</p>
                <input type={`${showPassword ? 'text' : 'password'}`} placeholder="*******" {...register("password")}  className="p-2 my-2 border-b-2 border-[#030742] text-[#030742] focus:outline-none"/>
                <span onClick={toggle} className="absolute right-5 bottom-6 max-md:text-sm cursor-pointer">{ showPassword ? <FaEye/> :  <FaEyeSlash/>}</span>
                </div>
    
                <div className="flex items-center mt-3 max-md:flex-wrap">
                    <input type="checkbox" id="terms" className="size-4 max-md:size-3"/>
                    <label htmlFor="terms" className="ml-2 text-[#030742] text-md cursor-pointer max-md:text-xs">Remember me</label>
                   <span className="ml-30 max-md:ml-5 max-md:mt-3 text-sm text-[#030742] cursor-pointer  underline max-md:text-xs"> <a href="#">Forgot your password?</a></span>
                </div>
    
                <div className="flex justify-evenly items-center mt-12 max-md:mt-5 max-md:w-full">
                    <button type="submit" className="py-2 w-full mx-4 rounded-full
                     bg-[#030742] text-white font-bold hover:bg-blue-950 cursor-pointer
                      transition-colors duration-500">Login</button>
                    <Link to={'/signUp'} className="text-center py-2 w-full mx-4 rounded-full text-[#030742] font-bold border border-[#030742] hover:bg-blue-950
                 hover:text-white cursor-pointer transition-colors duration-500">Sing Up</Link>
                </div>
            </div>
            </form>
          </div>
        </section>
  )
}

export default Login
