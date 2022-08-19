import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

// Image
import Logo from '../../resources/images/st_logo_solid.png'

// Style
import './AppBar.css';

function AppBar() {
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
        navigate("/");
        setUser(null);
      };

    return ( 
        <div className='appbar-conta'>
            <div className='logo'>
                <img src={Logo} alt="stranger things logo" />
             </div>

            {user &&
                <div className='searchbar-conta'>
                    <div className='searchbar'>
                       <Search className='search-icon' />
                       <input
                       placeholder='Search for post'
                       className='search-input'
                       /> 
                    </div>
                </div>
            }

            <div className='appbar-auth'>
                {!user ? (
                    <Link to='/'>
                        <button>Log In</button>
                    </Link>
                    ) : (
                    <>
                        <Avatar>J</Avatar>
                        <button onClick={logout}>Log Out</button>
                    </>
                    )
                } 
            </div>
        </div>
     );
}

export default AppBar;