// import logo1 from '../../assets/logo/Prime printing press logo.png'
// import logo2 from '../../assets/logo/Prime digital logo.png'
import { FaFacebook, FaLinkedin, FaInstagram, FaPhone, FaWhatsapp, FaGoogle, FaLocationArrow } from "react-icons/fa";
import { MdEmail, } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#800000] rounded-md text-white">
            <aside>
                <h2 className="text-3xl">المطبعة الرئيسية</h2>
                <h2 className="text-3xl">Prime Printing Press</h2>
                <p>
                    <span className="flex items-center gap-2"><FaLocationArrow /> PO Box 336, PC 112, CBD, Ruwi, Muscat, <br />
                    Sultanate of Oman  Near the Central Bank of Oman</span>
                    <span className="flex items-center gap-2"><MdEmail /> sales@primeprintingpress.com</span>
                    <span className="flex items-center gap-2"><FaPhone /> +968-99364737</span>
                    <span className="flex items-center gap-2"><FaPhone /> 22391571</span>

                </p>
                <div className="flex gap-2 text-xl">
                    <a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaGoogle /></a>
                </div>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <aside>
                <h2 className="text-3xl">العالم الرقمي الأول</h2>
                <h2 className="text-3xl">Prime Digital World</h2>
                <p>
                    <span className="flex items-center gap-2"><FaLocationArrow /> PO Box 336, PC 112, CBD, Ruwi, Muscat, <br />
                    Sultanate of Oman  Near the Central Bank of Oman</span>
                    <span className="flex items-center gap-2"><MdEmail /> sales@primeprintingpress.com</span>
                    <span className="flex items-center gap-2"><FaPhone /> +968-99364737</span>
                    <span className="flex items-center gap-2"><FaPhone /> 22391571</span>

                </p>
                <div className="flex gap-2 text-xl">
                    <a href="" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaFacebook /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="" target="_blank" rel="noreferrer"><FaGoogle /></a>
                </div>
            </aside>
        </footer>
    );
};

export default Footer;