import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user );
    const handleSignOut = () => {
        signOut(auth)
        .then(() =>{ 
            navigate("/");
        })
        .catch((error) => {
            navigate("/error")
        })
    }
    return (    
    <div className="relative p-2 bg-gradient-to-b from-black flex justify-between">
        <img className="w-40" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdavidblaine.com%2Fwp-content%2Fuploads%2F2017%2F04%2Fnetflix-logo.png&f=1&nofb=1&ipt=30327281c24b145b9d80dbc84a2175f7d450d7b1cd0af29f1bc6cd5030cbc301&ipo=images" alt="logo" />
        { user && <div className="flex justify-between items-center gap-2">
            <img className="w-8 h-8 rounded-md"src={user?.photoUrl} alt="usericon" />
            <button onClick={handleSignOut} className="font-medium hover:cursor-pointer text-red-500">Sign Out</button>
        </div>}
    </div>
    )
}
export default Header;