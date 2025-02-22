import { useState, useEffect } from 'react';
import SignupImg from "../../assets/Signup.png"
import { Link } from "react-router-dom"
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSignup = () => {
        // Handle login logic here, e.g., API call
        console.log({ email, password, rememberMe });
    };
    return (
        <div className=" bg-[#7EC1B1]">
            <div className="flex py-20 items-center justify-center items-end text-gray-500 gap-x-20">
                {/* Right Side - Logo Background */}
                <img src={SignupImg} alt="Logo" className='w-[674px] h-[500px]' />
                {/* Left Side - Login Form */}
                <div className="w-[630px] h-[825px] flex flex-col justify-center items-center bg-white border border-white rounded-2xl px-10 pt-10 gap-x-2 gap-y-5 font-semibold">
                    {/* Title */}
                    <h2 className="text-2xl text-black">
                        Create an Account
                    </h2>

                    <p>Create a account to continue</p>
                    {/* Input Fields */}
                    <div className="w-full max-w-2xl space-y-6">
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="Email" className='text-xl'>Email Address</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="h-[60px] 
                        text-gray-400 border p-3 w-full rounded-lg"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="Email" className='text-xl'>Username</label>
                            <input
                                type="email"
                                placeholder="UserName"
                                className="h-[60px] 
                        text-gray-400 border p-3 w-full rounded-lg"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex - justify-between'>
                                <label htmlFor="Email" className='text-xl'>Password</label>
                                <Link to="/forgetPassword">
                                    <p className="hover:underline">
                                        Forget Password?
                                    </p>
                                </Link>
                            </div>
                            <input
                                type="password"
                                className="h-[60px] text-gray-400 border w-full text-6xl rounded-lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="w-full max-w-2xl flex justify-between items-center mt-3">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                            />
                            <span>I accept terms and conditions</span>
                        </label>

                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleSignup}
                        className="w-full h-[60px] max-w-lg bg-[#7EC1B1] text-white py-2 rounded mt-10"
                    >
                        Sign Up
                    </button>


                    {/* Sign Up Link */}
                    <p className="mt-5">
                        Already have an account?{" "}
                        <Link to="/" className="text-blue-500 underline text-xl">
                            Login
                        </Link>
                    </p>
                </div>


            </div>
        </div>
    )
}

export default SignUp