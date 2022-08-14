import React, { useContext } from 'react';

// Components
import Header from '../Header/Header.jsx';
import AuthForm from '../AuthForm/AuthForm.jsx';

// Contexts
import { AuthContext } from '../../context/auth/index.js';

// Style
import './Home.css';

function Home() {
    const { isSignup, setIsSignup } = useContext(AuthContext);

    return ( 
        <>
            <Header setIsSignup={setIsSignup} />
            <div className="auth-conta">
                <h1> {isSignup ? 'Join our community today.' : 'Login to our community.'} </h1>
                <AuthForm />
            </div>
        </>
     );
}

export default Home;