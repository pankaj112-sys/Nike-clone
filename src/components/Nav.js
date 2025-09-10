import React from "react";
import Jordan from '../images/jordan.svg'
export function Nav() {
    return(
        <>
        <div className="flex justify-between bg-gray-100 p-1.4">
            <div className="flex justify-start">
                <img src={Jordan} alt="Jordan Logo" className="w-4.5 m-2 mx-13" />
            </div>
            <div className="flex justify-end p-1/5">
                <ul className="flex mr-13 text-[14px] mt-1">
                    <li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[13px]">Find a Store</li>|
                    <li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[12px]">Help</li>|
                    <li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[13px]">Join Us</li>|
                    <li className="flex mr-2.5 ml-2.5 mt-0.5 font-semibold text-[13px]">Sign In</li>
                </ul>
            </div>
        </div>
        </>
    );
}