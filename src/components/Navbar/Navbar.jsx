import { Link } from "react-router-dom";


const Navbar = () => {
    const navbarItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li>
            <Link to='/services'>Services</Link>
            {/* <ul className="p-2">
                <li><Link>Submenu 1</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
                <li><Link>Submenu 2</Link></li>
            </ul> */}
        </li>
        <li><Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div className="navbar  text-[#800000] ">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-58">
                        {
                            navbarItem
                        }
                        <div className="bg-[#800000] text-white rounded-xl">
                        <li ><Link>+968 99364737</Link></li>
                        <li ><Link>sales@primeprintingpress.com</Link></li>
                        </div>
                    </ul>
                </div>
            <div className="navbar-start">
                
                <Link className="lg:text-3xl md:text-2xl text-sm font-semibold">
                    <div >
                        <p className="text-end">المطبعة الرئيسية</p>
                        <p>Prime Printing Press</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex flex-col">
                
                <ul className="menu menu-horizontal text-lg px-24 font-semibold bg-[#800000] text-white">
                    <li><Link>+968 99364737</Link></li>
                    <li><Link>sales@primeprintingpress.com</Link></li>
                </ul>
                <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                    {/* <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li> */}
                    {
                        navbarItem
                    }
                </ul>

            </div>
            <div className="navbar-end">
                <Link className="lg:text-3xl md:text-2xl text-sm font-semibold">
                    <div>
                        <p className="text-end">العالم الرقمي الأول</p>
                        <p>Prime Digital world</p>
                    </div>
                </Link>

                {/* <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>+968 99364737</Link></li>
                        <li><Link>sales@primeprintingpress.com</Link></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;