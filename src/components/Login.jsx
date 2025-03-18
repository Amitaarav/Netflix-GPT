import React from 'react';
import Header from './Header';
import { useState } from 'react';


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div className="relative min-h-screen bg-black">
            {/* Header (Ensure it is above the background) */}
            <div className="relative z-30 ">
                <Header />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <img 
                    className="w-full h-full object-cover opacity-80" 
                    src="https://singh-cp.github.io/netflix-landingpage/images/netflix-background-image.jpg" 
                    alt="background" 
                />
            </div>

            {/* Login Form */}
            <form className="relative flex flex-col bg-black bg-opacity-30 backdrop-blur-lg p-10 rounded-lg w-1/3 mx-auto mt-20 text-white z-10">
                <h2 className="text-2xl font-bold mb-4 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                {!isSignInForm && (
                    <input type="text" placeholder='Name' className="p-3 m-2 bg-gray-700 bg-opacity-60 rounded"/>
                )}
                <input type="text" placeholder='Email Address' className="p-3 m-2 bg-gray-700 bg-opacity-60 rounded"/>
                <input type="password" placeholder='Password' className="p-3 m-2 bg-gray-700 bg-opacity-60 rounded"/>
                <button className="p-3 m-2 bg-red-600 text-white hover:bg-red-700 transition rounded font-bold hover:cursor-pointer">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='p-3 m-2 text-gray-300 hover:underline cursor-pointer' onClick={toggleSigninForm}>
                    {isSignInForm 
                    ? "New to Netflix? Sign Up Now" 
                    : "Already have an account? Sign In"}
                </p>
            </form>  
        </div>
    );   
};

export default Login;


