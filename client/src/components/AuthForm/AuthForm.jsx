import React, { useContext } from 'react';

// Contexts
import { AuthContext } from '../../context/auth/index.js';

// Style
import './AuthForm.css';

function AuthForm() {
    const { isSignup, setIsSignup } = useContext(AuthContext);

    return ( 
        <>
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
                <>
                    <p>Already have an account?</p>
                    <button className='signin-btn' onClick={() => setIsSignup(false)}>Sign in</button>
                </> 
            }
        </>
     );
}

export default AuthForm;