import { Routes, Route } from 'react-router-dom';

// Components
import SignUp from "./components/SignUp/SignUp.js";
import SignIn from "./components/SignIn.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />}>
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
