import React from "react";
import Tilty from "react-tilty";
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma5 mt0">
            <Tilty className="br2 shadow-2 tilt" perspective={250} reset={true} style={{height: '150px', width: '150px'}}>
                <div><img alt="logo" src={require("./face.png")}/></div>
            </Tilty>
        </div>
    )

}

export default Logo;