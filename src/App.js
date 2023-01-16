
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Login from './Components/Login ';
import Signup from './Components/Signup';
import Places from './Components/Places';




function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
