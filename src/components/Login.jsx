import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { AVTAAR, BACKGND_IMG } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: AVTAAR
                    }).then(() => {
                        const { uid, email, displayName, photoUrl } = auth.currentUser;
                        dispatch(addUser({ uid, email, displayName, photoUrl }));
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    setErrorMessage(error.code + " " + error.message);
                });
        } else {
            // Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .catch((error) => {
                    setErrorMessage(error.code + " " + error.message);
                });
        }
    };

    return (
        <div className="relative min-h-screen bg-black flex flex-col items-center justify-center px-4">
            {/* Header */}
            <div className="absolute top-0 left-0 w-full">
                <Header />
            </div>

            {/* Background Image */}
            <div className="absolute inset-0 z-10">
                <img 
                    className="w-full h-full object-cover opacity-80" 
                    src={BACKGND_IMG}
                    alt="background" 
                />
            </div>

            {/* Login Form */}
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className="relative bg-black bg-opacity-80 backdrop-blur-md p-8 rounded-lg w-full max-w-md mx-auto mt-20 text-white z-20"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                
                {!isSignInForm && (
                    <input ref={name} type="text" placeholder="Name" 
                        className="p-3 mb-3 w-full bg-gray-700 bg-opacity-60 rounded" />
                )}
                <input ref={email} type="text" placeholder="Email Address" 
                    className="p-3 mb-3 w-full bg-gray-700 bg-opacity-60 rounded" />
                <input ref={password} type="password" placeholder="Password" 
                    className="p-3 mb-3 w-full bg-gray-700 bg-opacity-60 rounded" />

                {errorMessage && (
                    <p className="text-red-500 text-center mb-3 font-light">{errorMessage}</p>
                )}

                <button 
                    className="p-3 w-full bg-red-600 text-white hover:bg-red-700 transition rounded font-bold hover:cursor-pointer"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="mt-4 text-center text-gray-300 hover:underline cursor-pointer" onClick={toggleSigninForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already have an account? Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;
