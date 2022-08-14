import React from 'react';

// Style
import './SignIn.css'

function SignIn() {

    return ( 
        <div className='signin-conta'>
            <h1>Login to our community.</h1>
            <form>
                <input  name="email" type="email" placeholder="Email" />
                <input  name="password" type="password" placeholder="Password" />
                <button>Sign in</button>
            </form>
        </div>
    );
}

export default SignIn;