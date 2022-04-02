import React from 'react';
import Navbar from "./components/Navbar/Navbar";
// import CarouselContainer from './components/Carousel/CarouselContainer';
// import Grid from './components/Grid/Grid';
// import Clients from './components/Clients/Clients';
// import Testimonials from './components/Testimonals/Testimonals';
// import Example from './components/Example/Example';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import PortfolioSlider from './components/PortfolioSlider/PortfolioSlider';
import ContactUs from './components/ContactUs/ContactUs';
import SocialMedia from './components/SocialMedia/SocialMedia';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Skills />
      <PortfolioSlider />
      <ContactUs />
      <SocialMedia />
    </div>
  );
}

export default App;
