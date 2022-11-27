import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './home/Home';
import About from './components/header/about/About';
import Skills from './skills/Skills';
import Services from './components/header/services/Services';
import Qualification from './components/header/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import ScrollUp from './scrollup/Scrollup';
import Blog from './blog/Blog';



const App = () => {
  return (
    <> 
    <Header />
    <main className='main'>
    <Home />
    <About /> 
    <Skills />
    <Services />
    <Qualification />
    <Testimonials />
    <Contact />
    <Blog />
    <Footer />
    <ScrollUp />



    </main>
    
    </>

  )
}


export default App
