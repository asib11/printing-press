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
            <p className="text-center font-bold my-2 text-[#800000]">copyright{copy} 2024 || Develop by <a href="">ASIB AHMED</a></p>
        </div>
    );
};

export default Main;