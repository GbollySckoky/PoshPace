import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './component/Nav/NavBar'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App