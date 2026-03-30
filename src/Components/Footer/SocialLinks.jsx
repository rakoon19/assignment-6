import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
    return (
        <div className='flex'>            
            <AiFillInstagram />
            <FaFacebookSquare />
            <FaXTwitter />
        </div>
    );
};

export default SocialLinks;