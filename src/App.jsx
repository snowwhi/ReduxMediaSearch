import React from 'react'
import {fetchPhotos,fetchVideos,fetchGIF,fetchLorem} from '../src/ApiMediaSearch/mediaApi'

const App = () => {
 
  return (
    <>
    <div className='min-h-screen w-full bg-slate-950'>

    <button className='bg-green-400 p-3 m-2 hover:scale-95 rounded-2xl text-white font-bold' onClick={fetchPhotos} >Get photo</button>
    <button className='bg-green-400 p-3 m-2 hover:scale-95 rounded-2xl text-white font-bold' onClick={fetchVideos}>Get vedios</button>
    <button  className='bg-green-400 p-3 m-2 hover:scale-95 rounded-2xl text-white font-bold'onClick={fetchGIF} > Get  gif</button>
    <button  className='bg-green-400 p-3 m-2 hover:scale-95 rounded-2xl text-white font-bold'onClick={fetchLorem} > Troubleshooting</button>
    </div>
    </>
  )
}

export default App
