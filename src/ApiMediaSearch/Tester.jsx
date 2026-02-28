import React from 'react'
 import {fetchGIF} from './mediaApi'
const tester = () => {
  return (
    <div>
        <button  className='bg-white' type="button" onClick={fetchGIF}> checking tenor api
        </button>
    </div>
  )
}

export default tester