import { createSlice } from '@reduxjs/toolkit'
export const Search =createSlice(
    {
        name:'Search',
        initialState:{
             query: '',
             activeTab: 'Photo',
             results: [],
             loading: false,
             error: null
        },
        reducers:{
            setQuery:(state,action)=>{
                state.query=action.payload},
            setLoading:(state,action)=>{
                 state.loading=true
                 state.error = null
            },
            setError:(state,actions)=>{
                state.error=actions.payload
                state.loading=false
            },
            setActiveTab:(state,action)=>{
                state.activeTab=action.payload},
            setResults:(state,action)=>{
                state.results=action.payload
                state.loading = false
            },
            clearResults:(state)=>{state.results=[]}
        }
    }
)
export const {setQuery,setLoading,setError,setActiveTab,setResults,clearResults} = Search.actions
export default Search.reducer