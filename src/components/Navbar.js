import React from "react";
import logo from '../images/Logo_NIKE.svg'
import search from '../images/search.svg'
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import { Men } from "./Men";
import { Women } from "./Women";
import { Kids } from "./Kids";
import { Collection } from "./Collection";
import { Body } from "./Body";

export function Navbar() {
    return (
        <>
            <div>
                <div className="p-1 d-flex ">
                    <Link to="/"><img src={logo} alt="Nike Logo" className="img-fluid mx-5 mt-2" style={{ width: 70 }} /></Link>
                    <div className="mx-auto">
                        <div className="d-flex ">
                            <ul className="d-flex fs-6 mt-1">
                                <Link to="/men"><li className="d-flex mx-3 text-white text-decoration-none">MEN</li></Link>
                                <Link to="/women"><li className="d-flex mx-3 text-white text-decoration-none">WOMEN</li></Link>
                                <Link to="/kids"><li className="d-flex mx-3 text-white text-decoration-none">KIDS</li></Link>
                                <Link to="/collection"><li className="d-flex mx-3 text-white text-decoration-none">COLLECTION</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className="my-1 bg-light btn bg-transparent">
                            <img src={search} alt="search" />
                        </button>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Body/>}>Body</Route>
                <Route path='/men' element={<Men />}>Men</Route>
                <Route path='/women' element={<Women />}></Route>
                <Route path='/kids' element={<Kids />}></Route>
                <Route path='/collection' element={<Collection />}></Route>
            </Routes>
        </>
    );
}