import React from "react";
import Jordan from '../images/jordan.svg'
import { Link } from "react-router-dom";
export function Nav() {
    return(
        <>
        <div className="flex justify-between bg-gray-100 p-1.4">
            <div className="flex justify-start">
                <img src={Jordan} alt="Jordan Logo" className="w-4.5 m-2 mx-13" />
            </div>
            <div className="flex justify-end p-1/5">
                <ul className="flex mr-13 text-[14px] mt-1">
                    <Link to="/findastore"><li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[13px]">Find a Store</li></Link>|
                    <Link to="/help"><li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[12px]">Help</li></Link>|
                    <Link to="/joinus"><li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[13px]">Join Us</li></Link>|
                    <Link to="/singin"><li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[13px]">Sign In</li></Link>
                </ul>
            </div>
        </div>
        </>
    );
}