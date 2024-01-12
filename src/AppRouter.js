import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <App></App>
      <Routes>
        <Route path='/' element={App} />
        <Route path='/create' element={App} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
