import { useState, useEffect } from 'react';
import LoginImg from "../../assets/Login.png"
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
        // Handle login logic here, e.g., API call
        console.log({ email, password, rememberMe });
        navigate("/dashboard");

    };

    return (
        <div className="h-[100vh] bg-[#7EC1B1]">
            <div className="flex py-30 items-center items-end justify-center text-gray-600 gap-x-30 font-semibold">
                {/* Left Side - Login Form */}
                <div className="w-[630px] h-[735px] flex flex-col justify-center items-center bg-white border border-white rounded-2xl px-10 py-20 gap-x-2 gap-y-5">
                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-black">
                        Login to Account
                    </h2>

                    <p>Please enter your email and password to continue</p>
                    {/* Input Fields */}
                    <div className="w-full max-w-2xl space-y-8">
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
                    <div className="w-full max-w-2xl flex justify-between items-center">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="accent-violet-600"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <span>Remember Me</span>
                        </label>

                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full h-[60px] max-w-lg bg-[#7EC1B1] text-white py-2 rounded mt-4"
                    >
                        Login
                    </button>


                    {/* Sign Up Link */}
                    <p className="mt-5">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-blue-500 text-xl underline">
                            Create Account
                        </Link>
                    </p>
                </div>

                {/* Right Side - Logo Background */}
                <img src={LoginImg} alt="Logo"
                    className='w-[626px] h-[579px]' />
            </div>
        </div>
    )
}

export default Login