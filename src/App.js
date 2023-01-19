
import './App.css';
import { Route, Routes} from "react-router-dom";
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Login from './Components/Login ';
import Signup from './Components/Signup';
import Places from './Components/Places';
import LoginUser from './Components/LoginUser';
import AdminSide from './Components/AdminSide';
import Aboutus from './Components/Aboutus';




function App() {
  return (
    <div>
       <Navbar/>

      <div>
        <Routes>
        <Route path="/adminside" element={<AdminSide/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/places" element={<Places />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/" element={<Landing />} />
          <Route path="/Aboutus"  element={<Aboutus/>} />
        </Routes>
      </div>

    </div>



    // <div>
    //   <Switch>
    //     <Route path="/" element={<Signup />}>
    //       <Navbar/>
    //     </Route>
    //     <Route path="/landing" element={<Landing />}>
    //       <Navbar/>
    //     </Route>
    //     <Route path="/login" element={<Login />}>
    //       <Navbar/>
    //     </Route>
    //     <Route path="/signup" element={<Signup />}>
    //       <Navbar/>
    //     </Route>
    //     <Route path="/places" element={<Places />}>
    //       <Navbar/>
    //     </Route>
    //     <Route path="/loginuser" element={<LoginUser />}>
    //       <Navbar/>
    //     </Route>
    //     <Route path="/adminside" element={<AdminSide/>}>
    //       <Navbar/>
    //     </Route>
    //   </Switch>
    // </div>
  );
}

export default App;
