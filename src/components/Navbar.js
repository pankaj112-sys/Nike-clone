import React from "react";
import logo from '../images/Logo_NIKE.svg'
import search from '../images/search.svg'
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
            <div className="flex justify-between p-1.5">
                
                <Link to="/"><img src={logo} alt="Logo" className="flex w-15 m-2 mx-13"/></Link>
                
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
                    <img src={search} alt="SearchLogo" className="mx-10 w-5 " />
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