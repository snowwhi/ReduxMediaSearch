import {configureStore} from '@reduxjs/toolkit'
import  Search from '../Slices/SearchSlice'
import CollectionSlice from '../Slices/CollectionSlice'
export const store = configureStore({
    reducer:{
        Search:Search ,
        Collection:CollectionSlice
    }
})
