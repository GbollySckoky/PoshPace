import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './component/Nav/NavBar'
import PoshPace from './pages/PoshPace/PoshPace'
import FilteredProduct from './component/FilteredProduct/FilteredProduct'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<PoshPace />}/>
        <Route path='/FilteredProducts/:category' element={<FilteredProduct />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App