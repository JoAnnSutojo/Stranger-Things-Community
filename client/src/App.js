import { Routes, Route } from 'react-router-dom';

// Components
import Home from "./components/Home/Home.jsx";

// Contexts
import { AuthProvider } from './context/auth/index.js';

function App() {

  return (
    <AuthProvider>
      <div>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
      </div>
    </AuthProvider>
    
  );
}

export default App;
