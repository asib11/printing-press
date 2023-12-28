import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Main = () => {
    let copy = String.fromCodePoint(0x00A9);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <p className="text-center font-semibold my-2  ">copyright{copy} 2024 || Develop by <a className='font-mono font-bold hover:underline text-[#fd5252]' href="https://wa.me/+8801753249719" target="_blank" rel="noreferrer">ASIB AHMED</a></p>
        </div>
    );
};

export default Main;