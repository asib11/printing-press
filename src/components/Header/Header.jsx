import img1 from '../../assets/banner/PHOTO-2023-11-18-21-37-25.jpg'
import img2 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.20_ab1b7a46.jpg'
import img3 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.21_d92ec39b.jpg'
import img4 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.22_48e9343a.jpg'
import img5 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.26_3cb4d364.jpg'
import img6 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.23_8d815213.jpg'
import { ArrowLongLeftIcon, ArrowLongRightIcon, } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className="carousel w-full rounded-lg lg:h-[600px] md:h-[500px] h-[350px] mt-2">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full " />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#803c00a9] to-[rgba(128, 0, 0, 0.00)] ">
                    <div className='text-white space-y-4 md:space-y-5 lg:space-y-7 pl-16 md:pl-20 lg:pl-24 w-1/2 lg:w-1/3'>
                        <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>Affordable Price For Printing Servicing</h1>
                        <p className='lg:text-lg md:text-base text-xs'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex'>
                            <button className='btn rounded-none w-30 lg:w-36 bg-[#800000] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-30 lg:w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-4 opacity-[0.6]"><ArrowLongLeftIcon className="h-5 w-6 " /></a>
                    <a href="#slide2" className="btn btn-circle bg-[#800000]"><ArrowLongRightIcon className="h-5 w-6 text-white" /></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#803c00a9] to-[rgba(128, 0, 0, 0.00)] ">
                    <div className='text-white space-y-4 md:space-y-5 lg:space-y-7 pl-16 md:pl-20 lg:pl-24 w-1/2 lg:w-1/3'>
                        <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>Affordable Price For Printing Servicing</h1>
                        <p className='lg:text-lg md:text-base text-xs'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-30 lg:w-36 bg-[#800000] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-30 lg:w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-2 opacity-[0.6]"><ArrowLongLeftIcon className="h-5 w-6 " /></a>
                    <a href="#slide3" className="btn btn-circle bg-[#800000]"><ArrowLongRightIcon className="h-5 w-6 text-white" /></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#803c00a9] to-[rgba(128, 0, 0, 0.00)] ">
                    <div className='text-white space-y-4 md:space-y-5 lg:space-y-7 pl-16 md:pl-20 lg:pl-24 w-1/2 lg:w-1/3'>
                        <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>Affordable Price For Printing Servicing</h1>
                        <p className='lg:text-lg md:text-base text-xs'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-30 lg:w-36 bg-[#800000] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-30 lg:w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-2 opacity-[0.6]"><ArrowLongLeftIcon className="h-5 w-6 " /></a>
                    <a href="#slide4" className="btn btn-circle bg-[#800000]"><ArrowLongRightIcon className="h-5 w-6 text-white" /></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#803c00a9] to-[rgba(128, 0, 0, 0.00)] ">
                    <div className='text-white space-y-4 md:space-y-5 lg:space-y-7 pl-16 md:pl-20 lg:pl-24 w-1/2 lg:w-1/3'>
                        <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='lg:text-lg md:text-base text-xs'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-30 lg:w-36 bg-[#800000] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-30 lg:w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-2 opacity-[0.6]"><ArrowLongLeftIcon className="h-5 w-6 " /></a>
                    <a href="#slide5" className="btn btn-circle bg-[#800000]"><ArrowLongRightIcon className="h-5 w-6 text-white" /></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#803c00a9] to-[rgba(128, 0, 0, 0.00)] ">
                    <div className='text-white space-y-4 md:space-y-5 lg:space-y-7 pl-16 md:pl-20 lg:pl-24 w-1/2 lg:w-1/3'>
                        <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='lg:text-lg md:text-base text-xs'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-30 lg:w-36 bg-[#800000] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-30 lg:w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-2 opacity-[0.6]"><ArrowLongLeftIcon className="h-5 w-6 " /></a>
                    <a href="#slide6" className="btn btn-circle bg-[#800000]"><ArrowLongRightIcon className="h-5 w-6 text-white" /></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute flex items-center top-0 bottom-0 bg-gradient-to-r from-[#803c00a9] to-[rgba(128, 0, 0, 0.00)] ">
                    <div className='text-white space-y-4 md:space-y-5 lg:space-y-7 pl-16 md:pl-20 lg:pl-24 w-1/2 lg:w-1/3'>
                        <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p className='lg:text-lg md:text-base text-xs'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn rounded-none w-30 lg:w-36 bg-[#800000] border-none mr-3 text-white'>discover more</button>
                            <button className='btn rounded-none w-30 lg:w-36 btn-outline text-white'>latest price</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-2 opacity-[0.6]"><ArrowLongLeftIcon className="h-5 w-6 " /></a>
                    <a href="#slide1" className="btn btn-circle bg-[#800000]"><ArrowLongRightIcon className="h-5 w-6 text-white" /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;