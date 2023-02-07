import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Pricing from './components/Pricing/Pricing'
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={
        <Fragment>
          <Header />
          <Home />
        </Fragment>
        }
        />
         <Route path='/pricing' element={
        <Fragment>
          <Header />
          <Pricing/>
        </Fragment>
        }
        />
      </Routes>
    </div>
      
  )
}

export default App