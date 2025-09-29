import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Stats from './Components/Stats'
import Services from "./Components/Services";
import Team from "./Components/Team";
import Projects from "./Components/Project";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Team />
      <Projects />
      <Testimonial />
      <ContactForm />
      <Footer />
      <Routes>
        <Route path="/about" element={<about />} />
        <Route path="/services" element={<services />} />
        <Route path="/team" element={<team />} />
        <Route path="/testimonial" element={<testimonial />} />
      </Routes>
    </Router>
  );
}

export default App;
