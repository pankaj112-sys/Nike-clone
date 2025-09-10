import React from "react";
import logo from '../images/Logo_NIKE.svg'
import search from '../images/search.svg'
import Heart from '../images/heart.png'
import Bag from '../images/bag.svg';
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { New } from "./New";
import { Men } from "./Men";
import { Women } from "./Women";
import { Kids } from "./Kids";
import { Sale } from "./Sale";
import { Home } from "./Home";
import { Snkrs } from "./Snkrs";
// import { Body } from "./Body";

export function Navbar() {
        
    return (
        <>
            <div className="flex justify-between p-1.4">
                
                <Link to="/"><img src={logo} alt="Logo" className="flex w-18 m-2 mx-10 p-1"/></Link>
                
                <div className="flex justify-center">
                    <ul className="flex m-2 p-2">

                        <Link to="/new&featured"><li className="ml-8 font-semibold hover:underline">New & Featured</li>
                        </Link>

                        <Link to="/men"><li className="ml-8 font-semibold hover:underline">Men</li>
                        </Link>

                        <Link to="/women"><li className="ml-8 font-semibold hover:underline">Women</li>
                        </Link>
                       
                        <Link to="/kids" ><li className="ml-8 font-semibold hover:underline">Kids</li>
                        </Link>
                                           
                        <Link to="/sale"><li className="ml-8 font-semibold hover:underline">Sale</li>
                        </Link>

                        <Link to="/snkrs"><li className="ml-8 font-semibold hover:underline">SNKRS</li>
                        </Link>
                    </ul>
                </div>
        
                <div className="flex">
                    <div className="flex mr-5">
                    <button><img src={search} alt="SearchLogo" className="w-5 mx-5 border rounded-lg h-8 w-9 mt-3" /></button>
                    <input type="text" className="h-7 w-30 border mt-3 rounded- p-1" placeholder="Search"/> 
                    </div>
                    <img src={Heart} alt="Heart Logo" className=" w-5 h-5 my-4 mx-2 mr-4"/>
                    <img src={Bag} alt="Bag Logo" className=" w-6 mr-13 mb-3"/>
                </div>
            </div>

           
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/new&featured" element={<New />}></Route>
                <Route path="/men" element={<Men />}></Route>
                <Route path="/men" element={<Men />}></Route>
                <Route path="/women" element={<Women />}></Route>
                <Route path="/kids" element={<Kids />}></Route>
                <Route path="/sale" element={<Sale/>}></Route>
                <Route path="/snkrs" element={<Snkrs/>}></Route>
            </Routes>
        </>
    );
}