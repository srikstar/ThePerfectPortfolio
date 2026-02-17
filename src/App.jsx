import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import None from './None'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<None />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App