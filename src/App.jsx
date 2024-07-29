import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Single from './pages/Single';
function App() {

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/:id' element={<Single/>}></Route>


    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
