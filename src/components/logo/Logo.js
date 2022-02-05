import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brainLogo from './brainLogo.png';

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt style = {{width:'120px'}}>
                <div className="Tilt pa1 br2 shadow-2" style={{ height: '120px', backgroundColor: 'blue' }}>
                    <img style = {{paddingTop: '5px'}} src = {brainLogo} alt = 'logo'></img>
                </div>
                </Tilt>
        </div>
    );
}

export default Logo;