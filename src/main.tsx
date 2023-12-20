import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Top from './pages/Top'
import Skill from './pages/Skill'
import Work from './pages/Work'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
