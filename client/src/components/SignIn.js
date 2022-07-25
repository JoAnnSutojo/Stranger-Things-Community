import React from 'react';

function SignIn() {


    return ( 
        <>
        <form>
            <input  name="email" type="email" placeholder="Email" />
            <input  name="password" type="password" placeholder="Password" />
            <button>Sign in</button>
        </form>
        </>
    );
}

export default SignIn;