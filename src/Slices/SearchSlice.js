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
            setQuery:(action,state)=>{
                state.query=action.payloads},
            setLoading:(action,state)=>{
                 state.loading=true
                 state.error = null
            },
            setError:(state,actions)=>{
                state.error=actions.payload
                state.loading=false
            },
            setActiveTab:(state,action)=>{
                state.activeTab=action.payload},
            setResults:(actions,state)=>{
                state.results=actions.payload
                state.loading = false
            },
            clearResults:(state)=>{state.results=[]}
        }
    }
)
export const {setQuery,setLoading,setError,setActiveTab,setResults,clearResults} = Search.actions
export default Search.reducer