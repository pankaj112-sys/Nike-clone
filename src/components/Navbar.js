import React from "react";
import heart from '../images/heart.png';
import bag from '../images/bag.png';

export function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white" >
                <div className="container-fluid bg-white">
                    <a className="navbar-brand mx-5" href="/">
                        <img src="Logo_NIKE.svg" style={{ width: "auto", height: 20 }} alt="Nike Logo" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 sans-font">
                            <li className="nav-item">
                                <a className="nav-link active text-black fw-semibold" aria-current="page" href="/">New & Featured</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-semibold" href="/">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-semibold" href="/">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-semibold" href="/">Kids</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-semibold" href="/">Sale</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black fw-semibold" href="/">SNKRS</a>
                            </li>
                        </ul>
                    </div>

                    <input type="search" name="search" className="mx-2 rounded-4 p-1 border-0 " style={{ backgroundColor: '#e0e0e0ff', color: '#756f6fff' }} />
                    <span className="navbar-text d-flex gap-3">
                        <img src={heart} alt="Favorites" style={{ height: 20 }} />
                        <img src={bag} alt="Shopping Bag" style={{ height: 20 }} />
                    </span>
                </div>
            </nav>

        </>
    );
}