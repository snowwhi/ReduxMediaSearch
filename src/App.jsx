import React from 'react'
 import HomePage from './Components/HomePage/HomePage'
  import CollectionPage from './Components/CollectionPage/CollectionPage'
import Nav from './Components/Nav/Nav'
import { Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'

const App = () => {
 
  return (

    <>
    <div className='min-h-screen w-full bg-slate-950'>
      <Nav/>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
      </div>
    </>
  )
}

export default App
