import { Link } from "react-router-dom";


const LeftNav = () => {
    return (
        <div>
            <nav className="flex flex-col">
                <Link to='/services'><header className="footer-title">Services</header></Link>
                <Link to='/services' className="link link-hover">Catalogue Book</Link>
                <Link to='/services/businesscard' className="link link-hover">Business Card</Link>
                <Link to='/services' className="link link-hover">Letterhead</Link>
                <Link to='/services' className="link link-hover">Envelope</Link>
                <Link to='/services' className="link link-hover">Book</Link>
                <Link to='/services' className="link link-hover">Box</Link>
                <Link to='/services' className="link link-hover">Roll Up</Link>
                <Link to='/services' className="link link-hover">Gifting</Link>
                <Link to='/services' className="link link-hover">3D Sign</Link>
                <Link to='/services' className="link link-hover">T-Shirt</Link>
                <Link to='/services' className="link link-hover">Wall Graphics</Link>
                <Link to='/services' className="link link-hover">vehicle Graphics</Link>
            </nav>
        </div>
    );
};

export default LeftNav;