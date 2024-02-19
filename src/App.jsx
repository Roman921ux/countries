import { useState, useEffect } from 'react'
import axios from 'axios'
// router
import { Route, Routes } from 'react-router-dom'

// components
import { Header } from './components/Header'
import { Main } from './components/Main'
// pages
import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'


function App() {

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  )
}

export default App
