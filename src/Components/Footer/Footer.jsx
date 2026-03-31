import Copyright from "./Copyright";
import FooterPaths from "./FooterPaths";

const Footer = () => {
    return (
        <div className="space-y-12 sm:space-y-16 md:space-y-20 bg-[#101727] text-white pt-16 sm:pt-20 md:pt-24 lg:pt-30 pb-7.5 w-full mx-auto px-6 sm:px-10 md:px-20 lg:px-32">
            <FooterPaths />
            <Copyright />
        </div>
    );
};

export default Footer;