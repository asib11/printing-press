/* eslint-disable react/no-unescaped-entities */
import img1 from '../../assets/serviceOverView/img1.jpg'
import img2 from '../../assets/serviceOverView/img2.jpg'
import img3 from '../../assets/serviceOverView/Packet Design 3.jpg'
import img6 from '../../assets/serviceOverView/img6.jpg'
import sign from '../../assets/serviceOverView/BC_21.jpg'
import rollUp from '../../assets/serviceOverView/rollup.jpg'
import lh from '../../assets/serviceOverView/LH_4.jpg'
import three from '../../assets/serviceOverView/img3D2.jpg'
import stamp from '../../assets/serviceOverView/3d.jpg'
import envelope from '../../assets/serviceOverView/Opus-Penta-Letterhead-Presentation.jpg'
import cetalog from '../../assets/serviceOverView/Coastal-Shipping-Links-Kerala-Branding-Collaterals.jpg'
import book from '../../assets/serviceOverView/book design.jpg'

import { Link } from "react-router-dom";
import { ArrowLongRightIcon, } from '@heroicons/react/24/solid'


const ServiceOverView = () => {
    return (
        <div className="text-center">
            <h3 className='text-xl  font-bold text-[#800000]'>Services</h3>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid max-sm:grid-cols-2 grid-cols-4 gap-6 max-sm:justify-items-center'>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={cetalog} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Catalogue book</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={sign} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Business Card</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={lh} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Letterhead</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={envelope} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Envelope</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={book} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Book</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={img3} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">box</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={rollUp} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Roll Up</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={img2} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Gifting</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={stamp} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">3D Sign</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-full">
                        <img src={three} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">T-Shirt</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5 h-4/5">
                        <img src={img1} alt="printingPress" className="rounded-lg h-full" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Wall Graphics</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-48 w-72 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={img6} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body flex-row justify-between items-center">
                        <h2 className="card-title text-[#800000]">Vehicle Graphics</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn btn-circle text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/services'><button className="btn bg-[#800000] text-white my-10">Visit Our All Services</button></Link>
        </div>
    );
};

export default ServiceOverView;