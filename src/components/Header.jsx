import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
        .then(() => navigate("/"))
        .catch(() => navigate("/error"));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGPTSearchClick = () => {
        // Toggle GPT Search button
        dispatch(toggleGptSearchView());
    }
    return (
        <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-50 flex justify-between items-center z-10">
            <img className="w-40 h-10" src={LOGO} alt="logo" />
            {user && (
                <div className="flex items-center gap-3">
                    <button className="py-2 px-4 bg-purple-800 text-white rounded-md hover:bg-purple-700 hover:cursor-pointer" onClick={handleGPTSearchClick}>GPT Search</button>
                    {user?.photoURL ? (
                        <div>
                            <img className="w-8 h-8 rounded-md" src={user.photoURL} alt="User" />
                        </div>
                        
                    ) : (
                        <div className="w-8 h-8 bg-gray-500 rounded-md flex items-center justify-center text-white">
                            {user?.displayName?.charAt(0).toUpperCase() || "U"}
                        </div>
                    )}
                    <button onClick={handleSignOut} className="font-medium text-red-500 hover:cursor-pointer transition-all duration-200 ease-in-out">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
