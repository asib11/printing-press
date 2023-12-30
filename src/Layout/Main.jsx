import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    const copy = String.fromCodePoint(0x00A9);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="flex justify-between text-xs rounded-sm font-semibold mt-1 px-4">
                <p >copyright{copy} 2024</p>
                <p> Develop by <a className='font-mono font-bold hover:font-extrabold hover:underline text-[#C32148]' href="https://wa.me/+8801753249719" target="_blank" rel="noreferrer">ASIB AHMED</a></p>
            </div>
        </div>
    );
};

export default Main;