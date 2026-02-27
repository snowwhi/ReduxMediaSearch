import {createSlice} from '@reduxjs/toolkit'
import { toast, Zoom } from 'react-toastify';
const Collection=createSlice({
      name:'Collection',
      initialValue:{
         items: JSON.parse(localStorage.getItem('collection')) || []
      },
      reducers:{
        addCollection:(state,action)=>{
            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items))
            }
        },
        
        removeCollection:()=>{
             console.log('removed');
            
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            console.log(state.items);
            
            localStorage.setItem('collection', JSON.stringify(state.items))
        },
        clearCollection:(state)=>{
            state.items = []
            localStorage.removeItem('collection')},
        addedToast:()=>{
            toast.success('🦄 Added to Collection!', {
                autoClose: 5000,
                position: "top-right",
                closeOnClick: false,
                hideProgressBar: false,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                progress: undefined,
                transition: Bounce,
});
        },
        removeToast:()=>{
            toast.error('🦄 Removed From Collection', {
                autoClose: 5000,
                position: "top-right",
                closeOnClick: false,
                hideProgressBar: false,
                draggable: true,
                pauseOnHover: true,
                theme: "dark",
                progress: undefined,
                transition: Bounce,
});
        }

      }

})
export const {addCollection,removeCollection,clearCollection,addedToast,removeToast} =Collection.action
export default Collection.reducers