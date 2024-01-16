import { Link } from "react-router-dom";


const LeftNav = () => {
    return (
        <div>
            <nav className="flex flex-col text-[#800000] space-y-4 pl-3">
                <Link to='/services' className="text-2xl font-semibold">Services</Link>
                <Link to='/services/businesscard' className="link link-hover">Business Card</Link>
                <Link to='/services/letterhead' className="link link-hover">Letterhead</Link>
                <Link to='/services' className="link link-hover">Envelope</Link>
                <Link to='/services' className="link link-hover">Book</Link>
                <Link to='/services' className="link link-hover">Box</Link>
                <Link to='/services' className="link link-hover">Paper Punch File</Link>
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