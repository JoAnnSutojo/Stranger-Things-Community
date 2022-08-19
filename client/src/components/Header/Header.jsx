import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Contexts
import { AuthContext } from '../../context/auth/index.js';

// Image
import  Logo  from "../../resources/images/ST_Logo_4.png";

// Style
import './Header.css';

function Header() {
    const { setIsSignup } = useContext(AuthContext);

    return ( 
        <div className="header-conta">
            <NavLink to="/" onClick={() => setIsSignup(true)} className="logo-conta">
                <img src={Logo} alt="stranger things logo"/>
                <h1>-- Family --</h1>
            </NavLink>
        </div>
     );
}

export default Header;