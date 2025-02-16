import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

function Router() {
  return (
    <Routes>
        {/* <Route path='/' element={<Navigate to='/home' replace />} /> */}
        {/* <Route path='/exampleComponent' element={<ExampleComponent />} /> */}
        {/* <Route path='*' element={<Navigate to='/home' replace />} /> */}
    </Routes>
  )
}

export default Router
