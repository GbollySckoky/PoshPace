import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './component/Nav/NavBar'
import PoshPace from './pages/PoshPace/PoshPace'
import FilteredProduct from './component/FilteredProduct/FilteredProduct'
import FilteredProductId from './component/FilteredProductId/FilteredProductId'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<PoshPace />}/>
        <Route path='/products/:category' element={<FilteredProduct />} />
        <Route path='/product/:category/:id' element={<FilteredProductId />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App