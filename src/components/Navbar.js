import React from "react";
import logo from '../images/Logo_NIKE.svg'
import search from '../images/search.svg'
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Men } from "./Men";
import { Women } from "./Women";
import { Kids } from "./Kids";
import { Collection } from "./Collection";
// import { Body } from "./Body";

export function Navbar() {
        
    return (
        <>
            <div className="flex justify-between">
                <img src={logo} alt="Logo" className="flex w-20 m-2 mx-10" />
                <div className="flex justify-center">
                    <ul className="flex m-2 p-2">
                        <Link to="/men"><li className="ml-8 relative text-gray-800 transition-colors duration-300 hover:text-purple-600
                        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600
                        after:transition-all after:duration-300 hover:after:w-full">Men</li></Link>
                        <Link to="/women"><li className="ml-8 relative text-gray-800 transition-colors duration-300 hover:text-purple-600
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600
          after:transition-all after:duration-300 hover:after:w-full">Women</li></Link>
                       
                        <Link to="/kids" ><li className="ml-8 relative text-gray-800 transition-colors duration-300 hover:text-purple-600
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600
          after:transition-all after:duration-300 hover:after:w-full">Kids</li></Link>
                       
                        <Link to="/collection"><li className="ml-8 mr-8 relative text-gray-800 transition-colors duration-300 hover:text-purple-600
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-purple-600
          after:transition-all after:duration-300 hover:after:w-full">Collection</li></Link>
                    
                    </ul>
                </div>
                
                <div className="flex">
                    <img src={search} alt="SearchLogo" className="mx-10 w-5 " />
                </div>
            </div>
            <Routes>
                <Route path="/men" element={<Men />}></Route>
                <Route path="/women" element={<Women />}></Route>
                <Route path="/kids" element={<Kids />}></Route>
                <Route path="/collection" element={<Collection />}></Route>
            </Routes>
        </>
    );
}