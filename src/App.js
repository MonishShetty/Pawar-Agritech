import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contract from "./pages/Contract";
import Water from "./pages/Water";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Team from "./pages/Team";
import Farmer from "./pages/Farmer";
import Buyer from "./pages/Buyer";
import Soil from "./pages/Soil";

function App() {
  return (
    <>
      <Router>
        <Navbar />
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
