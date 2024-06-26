import React from "react";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { footerProductLinks, footerSupportLinks, footercompanyLinks } from "../../static/data";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="bg-[#bec408] text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 bg-[#bec408] py-7">
            <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
                <span className="text-[#967919]">Subscribe</span>us for News <br />{" "}
                Events and Offers
            </h1>
            <div>
                <input className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                type="text"
                required
                placeholder="Enter your Email"
                />
                <button className="bg-[#967919] hover:bg-bg-[#c39c1e] duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full">
                    Submit
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-6 sm:text-center">
            <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                <img src="https://shopo.quomodothemes.website/assets/images/logo.svg "
                alt=""
                style={{ filter: "brightness(5) invert(1)"}} />
                <br />
                <p>The home and Elements needed to create Beautiful Products</p>
                <div className="flex items-center mt-[15px] ">
                    <AiFillFacebook size={25} 
                    className="cursor-pointer" />
                    <AiOutlineInstagram size={25}
                    style={{marginLeft: "15px" ,cursor: "pointer"}} />
                    <AiOutlineYoutube size={25}
                    style={{marginLeft: "15px" ,cursor: "pointer"}}/>
                </div>
            </ul>
            <ul className="text-center sm:text-start">
                <h1 className="mb-1 font-600 ">Company</h1>
                {footercompanyLinks.map((link) => (
                    <li key={link.name}>
                        <link className="bg-[#967919] hover:text-[#c39c1e] text-400 duration-300 text-sm cursor-pointer leading-6 " to={link}>
                        </link>
                    </li>
                ))

                }
            </ul>
            <ul className="text-center sm:text-start">
                <h1 className="mb-1 font-600 ">Shop</h1>
                {footerProductLinks.map((link) => (
                    <li key={link.name}>
                        <Link className="bg-[#967919] hover:text-[#c39c1e] text-400 duration-300 text-sm cursor-pointer leading-6 " to={link}>
                        </Link>
                    </li>
                ))

                }
            </ul>
            <ul className="text-center sm:text-start">
                <h1 className="mb-1 font-600 ">Support</h1>
                {footerSupportLinks.map((link) => (
                    <li key={link.name}>
                        <Link className="bg-[#967919] hover:text-[#c39c1e] text-400 duration-300 text-sm cursor-pointer leading-6 " to={link}>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-[#987a15] text-600 text-sm pb-8">
                    <span>
                        {new Date().getFullYear()} MERN Team.All rights reserved. </span>
                        <span>Terms. Privacy Policy</span>
                        <div className="sm:block flex items-center justify-center w-full">
                            <img src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75 "
                            alt="" />
                        </div>
        </div>
    </div>
  );
};

export default Footer;