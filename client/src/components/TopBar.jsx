import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { Search, ExitToApp } from '@material-ui/icons';
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
            <div className='topbar-left'>
                <Link className='topbar-logo' to='/'>
                    {/* <img className='topbar-logo' src={Logo} alt="stranger things logo" /> */}
                    Stranger Things
                </Link>
            </div>
            {/* <div className='searchbar-conta'>
                 <div className='searchbar'>
                    <Search className='search-icon' />
                    <input
                    placeholder='Search for post'
                    className='search-input'
                    />  
                 </div>
            </div> */}
            <div className='topbar-right'>
                {/* <Avatar>J</Avatar> */}
                <button>
                  <Search className='topbar-icons' />
                </button>
                <button onClick={logout}>
                  <ExitToApp className='topbar-icons' />
                </button>
            </div>
        </div>
     );
}

export default TopBar;