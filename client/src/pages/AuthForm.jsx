import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

// Contexts
import { AuthContext } from '../context/auth/index.js';

// Image
import  Logo  from '../resources/images/ST_Logo_4.png';


function AuthForm() {
    const { isSignup, setIsSignup } = useContext(AuthContext);

    // const switchMode = () => {
    //     setIsSignup((prevIsSignup) => !prevIsSignup)
    // }

    return ( 
        <div className='main-auth-conta'>
            <NavLink 
            to="/" 
            onClick={() => setIsSignup(true)} className="logo-conta">
                <img src={Logo} alt="stranger things logo"/>
                {/* <h1>-- Family --</h1> */}
            </NavLink>
            <div className="auth-form-conta">
                <h1> {isSignup ? 'Join our community today.' : 'Login to our community.'} </h1>
                <form>
                    {isSignup &&
                        <input name="userName" type="text" placeholder="Username" />
                    }
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    {isSignup &&
                        <input name="confirmPassword" type="confirmPassword" placeholder="Confirm password" />
                    }
                    <button>{isSignup ? 'Sign up' : 'Sign in'}</button>
                </form>
                {isSignup &&
                    <div className='signin-conta'>
                        <p>Already have an account?</p>
                        <button  onClick={() => setIsSignup(false)}>Sign in</button>
                    </div> 
                }

            </div>
        </div>
     );
}

export default AuthForm;