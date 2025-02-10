import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AgamaIslam from './components/AgamaIslam/AgamaIslam';
import AgamaKristenProtestan from './components/AgamaKristen/AgamaKristen';
import AgamaKatolik from './components/AgamaKatholik/AgamaKatolik';
import AgamaHindu from './components/AgamaHindu/AgamaHindu';
import AgamaBuddha from './components/AgamaBudha/AgamaBudha';
import AgamaKonghucu from './components/AgamaKonghucu/AgamaKonghucu';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Content />} />
          <Route path="/agama-islam" element={<AgamaIslam />} />
          <Route path="/agama-kristen-protestan" element={<AgamaKristenProtestan />} />
          <Route path="/agama-katolik" element={<AgamaKatolik />} />
          <Route path="/agama-hindu" element={<AgamaHindu />} />
          <Route path="/agama-buddha" element={<AgamaBuddha />} />
          <Route path="/agama-konghucu" element={<AgamaKonghucu />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
