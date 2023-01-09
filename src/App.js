
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';


function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/landing" element={< Landing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
