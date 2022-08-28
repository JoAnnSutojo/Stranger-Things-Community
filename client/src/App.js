import { Routes, Route } from 'react-router-dom';

// Components
import AppBar from './components/AppBar/AppBar.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import HomeUser from './components/HomeUser/HomeUser.jsx';
import Footer from './components/Footer/Footer.jsx';

// Contexts
import { AuthProvider } from './context/auth/index.js';

function App() {

  return (
    <AuthProvider>
    <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomeUser />} />
      </Routes>
    <Footer />
    </AuthProvider>
    
  );
}

export default App;
