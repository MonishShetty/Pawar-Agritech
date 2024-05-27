import './App.css';
import Carousel from './Carousel';
import Content from './Content';
import Navbar from './Navbar';
import Service from './Service';
import Companyinfo from './Companyinfo';
import Whyus from './Whyus';
import FAQ from './FAQ';
import Footer from './Footer';
import Contract from './Contract';
import Water from './Water';

import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Signin from './Signin';
import Signup from './Signup';
import Team from './Team';
import Farmer from './Farmer';
import Buyer from './Buyer';
import Soil from './Soil';




function App() {
  return (
    <>
     
        
        <Router>
        <Navbar />
       {/* <Home/> */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/contractfarming" element={<Contract />} />
          <Route path="/watersolutions" element={<Water />} />
          <Route path="/soiltesting" element={<Soil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/buyer" element={<Buyer />} />

         
        </Routes>
        <Footer />

        </Router>

    </>
  );
}

export default App;
