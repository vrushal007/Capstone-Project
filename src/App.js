import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
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
      </Routes>
    </div>
      
  )
}

export default App