import React from "react";
import logo from '../images/Logo_NIKE.svg'
import search from '../images/search.svg'

export function Navbar() {
    return (
        <>
            <div>
                <div className="border border-primary border-3 p-1 d-flex ">
                    <img src={logo} alt="Nike Logo" className="img-fluid mx-5 mt-2" style={{ width: 70 }} />
                    <div className="mx-auto">
                        <div className="d-flex border border-3 border-primary">
                            <ul className="d-flex fs-6 mt-1">
                                <li className="d-flex mx-2 ">MEN</li>
                                <li className="d-flex mx-2">WOMEN</li>
                                <li className="d-flex mx-2">KIDS</li>
                                <li className="d-flex mx-2">COLLECTION</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                    <button className="my-2 bg-light" style={{}} >
                        <img src={search} alt="search" />
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}