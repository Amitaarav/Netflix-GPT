import React from 'react';
import Header from './Header';
import { useState , useRef} from 'react';
import  { checkValidData } from '../utils/validate';
import { auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [ errorMessage, setErrorMessage ] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toggleSigninForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        // first validate the form data
        console.log(email.current.value)
        console.log(password.current.value)

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        // if there is no error message, then proceed to login
        if(message) {
            return;
        }
        
        if(!isSignInForm) {
            // Sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        const {uid, email, displayName, photoUrl} =  auth.currentUser;
                        dispatch(
                            addUser({uid:uid, email:email, displayName:displayName, photoUrl: photoUrl})
                        )
                    navigate('/browse');
                    }).catch((error) => {
                    setErrorMessage(error.message)
                    });
                console.log(user); // Signin automaticlly
                navigate('/browse');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // set error messages
                setErrorMessage(errorCode +" "+ errorMessage);
            });
        }
        else {
            // Sign in Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/browse');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +" "+ errorMessage);
            });

        }
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
            <form onSubmit={(e) => e.preventDefault()} className="relative flex flex-col bg-black bg-opacity-30 backdrop-blur-lg p-10 rounded-lg w-1/3 mx-auto mt-20 text-white z-10">
                <h2 className="text-2xl font-bold mb-4 text-center">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                {!isSignInForm && (
                    <input ref={name} type="text" placeholder='Name' className="p-3 m-2 bg-gray-700 bg-opacity-60 rounded"/>
                )}
                <input ref={email} type="text" placeholder='Email Address' className="p-3 m-2 bg-gray-700 bg-opacity-60 rounded"/>
                <input ref={password} type="password" placeholder='Password' className="p-3 m-2 bg-gray-700 bg-opacity-60 rounded"/>

                <p className="text-red-500 text-center mb-4 font-light">{errorMessage}</p>

                <button className="p-3 m-2 bg-red-600 text-white hover:bg-red-700 transition rounded font-bold hover:cursor-pointer" onClick={handleButtonClick}>
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


