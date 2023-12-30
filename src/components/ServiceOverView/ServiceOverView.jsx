/* eslint-disable react/no-unescaped-entities */
import img1 from '../../assets/banner/WhatsApp Image 2023-12-23 at 14.20.20_ab1b7a46.jpg'
import { Link } from "react-router-dom";
import {ArrowLongRightIcon, } from '@heroicons/react/24/solid'


const ServiceOverView = () => {
    return (
        <div className="text-center">
            <h3 className='text-xl  font-bold text-[#800000]'>Services</h3>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <div className='grid max-sm:grid-cols-2 grid-cols-3 gap-6'>
                <div className="card max-sm:w-64 w-96 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={img1} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body lg:flex-row justify-between">
                        <h2 className="card-title text-[#800000]">business card</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn outline outline-[#800000] text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-64 w-96 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={img1} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body lg:flex-row justify-between">
                        <h2 className="card-title text-[#800000]">letterhead</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn outline outline-[#800000] text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-64 w-96 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={img1} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body lg:flex-row justify-between">
                        <h2 className="card-title text-[#800000]">Stamp</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn outline outline-[#800000] text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-64 w-96 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={img1} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body lg:flex-row justify-between">
                        <h2 className="card-title text-[#800000]">Books</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn outline outline-[#800000] text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-64 w-96 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={img1} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body lg:flex-row justify-between">
                        <h2 className="card-title text-[#800000]">digital stickers printing with lamination</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn outline outline-[#800000] text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card max-sm:w-64 w-96 bg-base-100 shadow-xl">
                    <figure className="p-5">
                        <img src={img1} alt="printingPress" className="rounded-lg" />
                    </figure>
                    <div className="card-body lg:flex-row justify-between">
                        <h2 className="card-title text-[#800000]">Perfume Box</h2>
                        <div className="card-actions">
                            <Link to='/services'>
                                <button className="btn outline outline-[#800000] text-[#800000]"><ArrowLongRightIcon className="h-5 w-6" /></button>
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