import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Date from './pages/Date';
import Accept from './pages/Accept';

export default function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route exact path="/date" element={ <Date /> } />
      <Route exact path="/acception" element={ <Accept /> } />
      </Routes>
    </div>
  )
}
