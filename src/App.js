import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import OurClasses from './components/OurClasses/OurClasses'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'
import ContactUs from './components/ContactUs/ContactUs'
function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='/' element={
        <Fragment>
          <Home />
        </Fragment>
        }
      />
      <Route path='/pricing' element={
        <Fragment>
          <Pricing/>
        </Fragment>
        }
      />
      <Route path='/program' element={
        <Fragment>
          <OurClasses/>
        </Fragment>
        }
      />
       <Route path='/contactUs' element={
        <Fragment>
        <ContactUs/>
        </Fragment>
        }
      />
      </Routes>
      <Footer/>
    </div>
      
  )
}

export default App