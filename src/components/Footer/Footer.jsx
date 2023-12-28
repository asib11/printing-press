

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#800000] rounded-md text-white">
            <aside>
                <h2 className="text-3xl">المطبعة الرئيسية</h2>
                <h2 className="text-3xl">Prime Printing Press</h2>
                <p>XYZ Industries Ltd.<br />Providing reliable tech since 1992</p>
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
                    P.O.Box 3741,Behind Gold & Diamond Park <br />
                    4th I/Change,Sheikh Zayed Road, Al Quoz 3 <br />
                    crm@pdwdubai.com <br />
                    +04-3411886 <br />
                    +04-3411889
                </p>
            </aside>
        </footer>
    );
};

export default Footer;