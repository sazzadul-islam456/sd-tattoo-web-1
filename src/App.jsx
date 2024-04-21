import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Copyright from './components/Copyright'
import Footer from './components/Footer'
import GallerySection from './components/GallerySection'
import Header from './components/Header'
import Hero from './components/Hero'
import Interview from './components/Interview'


import Skills from './components/Skills'

import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div className='max-w-[1920px]
    mx-auto overflow-hidden bg-white'>
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Skills />
      <Testimonial />
      <Interview/>
      <Contact />
      <Footer />
      <Copyright />
      {/* <div className="h-[4000px]"></div> */}
    
    </div>
  )
}

export default App