import React from "react";
import search from '../images/search.svg';
import bag from '../images/bag.svg';
import heart from '../images/heart.png';
export function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
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
                        <ul className="navbar-nav mb-lg-0 sans-font">
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
                    <div>
                        <button className="btn btn-secondary-dark rounded-5 pb-2" style={{ backgroundColor: '#e0e0e0ff'}}>
                            <img src={search} alt="" />
                        </button>
                        <input type="search" name="search" className="rounded-4 p-1 border-0 " style={{ backgroundColor: '#e0e0e0ff', color: '#242424ff', width: 130 }} />
                    </div>
                    <span className="navbar-text mx-5 d-flex gap-3">
                        <img src={heart} alt="Favorites" style={{ height: 20 }} />
                        <img src={bag} alt="Shopping Bag" style={{ height: 20 }} />
                    </span>
                </div>
            </nav>

        </>
    );
}