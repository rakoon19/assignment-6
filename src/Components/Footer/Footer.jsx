import Copyright from "./Copyright";
import FooterPaths from "./FooterPaths";

const Footer = () => {
    return (
        <div className="space-y-20 bg-[#101727] text-white pt-30 pb-7.5 w-full">
            <FooterPaths></FooterPaths>
            <Copyright></Copyright>
        </div>
    );
};

export default Footer;