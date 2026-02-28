import React, { useState } from 'react';
import {setQuery } from '../../Slices/SearchSlice';
import { useDispatch } from 'react-redux';

const Searchbox = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    if (text.trim()) {
      dispatch(setQuery(text));
      setText('');
    }
  };

  return (
    <div className='w-full h-auto px-4 py-1'> 
      <form onSubmit={handleSubmit}
      id='Form'>
        <input
          className='ml-15 mt-5 w-3/4 rounded-2xl py-3 px-2 text-white font-bold border-2 border-white bg-transparent outline-none' 
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          type="text"
          id='Search'
          placeholder='Search anything...' 
        />
      </form>
    </div>
  );
};

export default Searchbox;