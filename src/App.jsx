import React from 'react'
import {fetchPhotos,fetchVideos,fetchGIF,fetchLorem} from '../src/ApiMediaSearch/mediaApi'
import Nav from './Components/Nav/Nav'
import { Route, Routes } from 'react-router'

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
