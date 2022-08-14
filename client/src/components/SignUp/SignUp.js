import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Components
import Header from '../Header/Header.js';

// Style
import './SignUp.css';

function SignUp() {
    const [isSignup, setIsSignup] = useState(true);

    return ( 
        <>
            <Header setIsSignup={setIsSignup} />
            {isSignup ?
                <div className="signup-conta">
                    <h1>Join our community today.</h1>
                    <form>
                        <input name="userName" type="text" placeholder="Username" />
                        <input name="email" type="email" placeholder="Email" />
                        <input name="password" type="password" placeholder="Password" />
                        <input name="confirmPassword" type="confirmPassword" placeholder="Confirm password" />
                        <button>Sign up</button>
                    </form>
                    <p>Already have an account?</p>
                    <NavLink to="signin" onClick={() => setIsSignup(false)}>
                        <button>Sign in</button>
                    </NavLink>
                </div>
               :
               <Outlet />
            }
        </>
     );
}

export default SignUp;