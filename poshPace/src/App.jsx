import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './component/Nav/NavBar'
import PoshPace from './pages/PoshPace/PoshPace'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<PoshPace />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App