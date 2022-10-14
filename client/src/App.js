import { Routes, Route } from 'react-router-dom';

// Components
import AuthForm from './pages/AuthForm.jsx';
import Home from './pages/Home.jsx';

// Contexts
import { AuthProvider } from './context/auth/index.js';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </AuthProvider>
    
  );
}

export default App;
