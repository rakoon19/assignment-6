import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
    return (
        <div className='flex gap-3'>
            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center z-0">
                <AiFillInstagram size={40} className="w-5 h-5 scale-120 text-black"/>              
            </div>            
            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <FaFacebookSquare size={40} className="w-5 h-5 text-black"/>              
            </div>            
            <div className="flex bg-white rounded-full w-10 h-10 items-center justify-center">
                <FaXTwitter size={40} className="w-5 h-5 text-black"/>              
            </div>              
        </div>
    );
};

export default SocialLinks;