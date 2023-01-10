
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Login from './Components/Login ';
import Signup from './Components/Signup';




function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
