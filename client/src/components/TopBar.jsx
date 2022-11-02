import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

// Image
import Logo from '../resources/images/STF_logo.png'

function TopBar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem("profile")));
      }, [location]);

      const logout = () => {
        setUser(null);
        navigate("/");
      };

    return ( 
        <div className='topbar-conta'>
            <div className='topbar-logo'>
                <Link to='/'>
                    <img src={Logo} alt="stranger things logo" />
                </Link>
            </div>
            <div className='searchbar-conta'>
                 <div className='searchbar'>
                    <Search className='search-icon' />
                    <input
                    placeholder='Search for post'
                    className='search-input'
                    /> 
                 </div>
            </div>
            <div className='topbar-auth'>
                <Avatar>J</Avatar>
                <button onClick={logout}>Log Out</button>
            </div>
        </div>
     );
}

export default TopBar;