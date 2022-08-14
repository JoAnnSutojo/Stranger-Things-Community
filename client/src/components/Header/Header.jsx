import React from 'react';
import { NavLink } from 'react-router-dom';

// Image
import  Logo  from "../../resources/images/ST_Logo_4.png";

// Style
import './Header.css';

function Header({ setIsSignup }) {
    return ( 
        <div  className="header-conta">
            <NavLink to="/" onClick={() => setIsSignup(true)} className="logo">
                <img src={Logo} alt="stranger things logo"/>
            </NavLink>
        </div>
     );
}

export default Header;