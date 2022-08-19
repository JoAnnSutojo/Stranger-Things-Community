import React, { useContext } from 'react';

// Components
import Header from '../Header/Header.jsx';
import AuthForm from '../AuthForm/AuthForm.jsx';

// Contexts
import { AuthContext } from '../../context/auth/index.js';

// Style
import './Home.css';

function Home() {
    const { isSignup } = useContext(AuthContext);

    return ( 
        <div className='homepage-conta'>
            <Header />
            <div className="auth-conta">
                <h2> {isSignup ? 'Join our community today.' : 'Login to our community.'} </h2>
                <AuthForm />
            </div>
        </div>
     );
}

export default Home;