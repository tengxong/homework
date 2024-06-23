import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResponsiveContainer from './box/ResponsiveContainer'
import Calculator from './calculator/calculator'

export default function Home() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<ResponsiveContainer />} />
     <Route path='/Calculator' element={<Calculator/>} />
    </Routes>
    </BrowserRouter>
  )
}
