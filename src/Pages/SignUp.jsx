import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";


const SingUP = () => {

    const [showPassword, setShowPassword] = useState(false);
    const toggle = () => {
        setShowPassword(!showPassword);
  }

    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters")
        .max(15, "Password must not exceed 15 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/,
           "Password must contain at least one uppercase letter, one lowercase letter",
           " one number, and one special character")
        
    });

    const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        console.log(data);
        console.log("Form submitted successfully!");
    }

  return (
    <section className="login-bg overflow-hidden">
      <div className="container absolute left-60 max-lg:left-0 max-lg:px-4 px-30 my-10 max-md:my-10">
        <h1 className="text-6xl max-sm:text-3xl font-bold text-center ml-40 max-lg:ml-0">Welcome!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto mt-10 max-md:mt-0 p-8 rounded-lg mr-60 max-lg:mr-0">
        <h1 className="text-3xl font-bold text-[#030742] ">Sign Up</h1>
        <div className="flex flex-col mt-15 max-md:mt-7 mb-3">

            <label htmlFor="name" className="uppercase text-[#030742] font-bold text-md max-md:text-sm ">Full Name</label>
              <p className="text-sm text-red-500 ">{errors.name?.message}</p>
            <input type="text" placeholder="Your Name" {...register("name")} className=" max-md:text-sm p-2 mt-2 max-md:mt-0 border-b-2 border-[#030742] text-[#030742] focus:outline-none"/>

            <label htmlFor="email" className="uppercase mt-3 text-[#030742] font-bold text-md max-md:text-sm ">Email Address</label>
            <p className="text-sm text-red-500 ">{errors.email?.message}</p>
            <input type="email" placeholder="shop@gmail.com" {...register("email")} className=" max-md:text-sm p-2 mt-2 max-md:mt-0 border-b-2 border-[#030742] text-[#030742] focus:outline-none"/>

            <div className="flex flex-col relative">
            <label htmlFor="password" className="uppercase mt-3 text-[#030742] font-bold text-md max-md:text-sm ">Password</label>
            <p className="text-sm text-red-500">{errors.password?.message}</p>
            <input type={`${showPassword ? 'text' : 'password'}`} placeholder="*******" {...register("password")} className="p-2 my-2 max-md:my-0 border-b-2 border-[#030742] text-[#030742] focus:outline-none"/>
            <span onClick={toggle} className="absolute right-5 bottom-6 cursor-pointer">{ showPassword ? <FaEye/> :  <FaEyeSlash/>}</span>
            </div>

            <div>
                <input type="checkbox" id="terms" className="size-4 max-md:size-3"/>
                <label htmlFor="terms" className="ml-2 text-[#030742] text-md cursor-pointer max-md:text-xs">I agree to the terms and conditions</label>
            </div>

            <div className="flex justify-evenly items-center mt-12 max-md:mt-5">
                <button type="submit" className="py-2 w-full mx-4 rounded-full bg-[#030742] text-white font-bold
                 hover:bg-blue-950 cursor-pointer transition-colors duration-500">Sign Up</button>
                <Link to={'/login'} className="text-center py-2 w-full mx-4 rounded-full text-[#030742] font-bold border border-[#030742] hover:bg-blue-950
                 hover:text-white cursor-pointer transition-colors duration-500">Login</Link>
            </div>
        </div>
        </form>
      </div>
    </section>
  );
}

export default SingUP
