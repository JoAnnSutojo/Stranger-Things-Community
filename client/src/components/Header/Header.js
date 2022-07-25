import React from 'react';
import { NavLink } from 'react-router-dom';

// Image
import  logo  from "./../../images/ST_Logo_4.png";

// Style
import './Header.css';

function Header(props) {
    return ( 
        <div  className="header-conta">
            <NavLink to="/" onClick={() => props.setIsHome(true)} className="logo">
                <img src={logo} alt="stranger things logo"/>
            </NavLink>
        </div>
     );
}

export default Header;