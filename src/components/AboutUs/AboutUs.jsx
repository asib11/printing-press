
import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.25_f724643d.jpg'
import img2 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.26_3cb4d364.jpg'
const AboutUs = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col-reverse lg:flex-row">
                
                <div className='lg:w-1/2'>
                    <h3 className='text-xl max-sm:text-center font-bold text-[#800000]'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <Link to='/about'><button className="btn text-white text-lg w-40 h-14 bg-[#800000]">Get More Info</button></Link>
                </div>
                <div className='lg:w-1/2 relative mb-12 md:mb-16 lg:ml-6'>
                    <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img1} className="w-1/2 absolute rounded-lg right-5 top-1/2 border-8 border-white" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;