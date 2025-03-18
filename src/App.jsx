import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contect from "./Pages/Contect.jsx";
import Doctors from './Pages/Doctors.jsx';
import Login from './Pages/Login.jsx';
import MyAppointment from "./Pages/MyAppointment.jsx";
import MyProfile from './Pages/MyProfile.jsx';
import Appointment from './Pages/Appointment.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from "./Components/Footer.jsx";

function App() {
  return(
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
       <Route path="/contect" element={ <Contect/> } />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:speciality" element={<Doctors/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/My-appointment" element={<MyAppointment/>} />
        <Route path="/My-Profile" element={<MyProfile/>} />
        <Route path="/appointment/:docId" element={<Appointment/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;