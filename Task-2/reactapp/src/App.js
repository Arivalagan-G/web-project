import './App.css';

import { BrowserRouter, Routes,Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home1 from "./Pages/LandingPage/Components/Home";
import About from "./Pages/LandingPage/Components/About";
 import Service from "./Pages/LandingPage/Components/Service";
import Signup from "./Pages/LandingPage/Components/Signup";
import Contact from "./Pages/LandingPage/Components/Contact";
import Login1 from "./Pages/LandingPage/Components/Login";
import Errorpage from './Pages/LandingPage/Components/Errorpage';
function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/*" element={<Errorpage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
