import React from "react";
import Bg from "../images/bg.jpg"
export function Body() {
    return (
        <>
        <div className="bg-image bg-cover border border-2 border-primary">
           <img src={Bg} alt="Background-image" />
        </div>
        </>
    );
}