import React, { useContext } from 'react';

// Components
import TopBar from '../components/TopBar.jsx';
import Feed from '../components/Feed/Feed.jsx';

// Contexts
import { AuthContext } from '../context/auth/index.js';


function Home() {
    const { isSignup } = useContext(AuthContext);

    return ( 
        <>
           <TopBar />
           <Feed />
        </>
     );
}

export default Home;