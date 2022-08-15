import { Routes, Route } from 'react-router-dom';

// Components
import Home from "./components/Home/Home.jsx";
import AuthForm from "./components/AuthForm/AuthForm.jsx";

// Contexts
import { AuthProvider } from './context/auth/index.js';

function App() {

  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    
    </AuthProvider>
    
  );
}

export default App;
