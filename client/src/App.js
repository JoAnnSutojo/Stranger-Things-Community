import { Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home/Home.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import Footer from './components/Footer/Footer.jsx';

// Contexts
import { AuthProvider } from './context/auth/index.js';

function App() {

  return (
    <AuthProvider>
    <AppBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* all posts route */}
      </Routes>
    <Footer />
    </AuthProvider>
    
  );
}

export default App;
