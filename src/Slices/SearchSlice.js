import { createSlice } from '@reduxjs/toolkit'
export const Search =createSlice(
    {
        name:'Search',
        initialState:{
             query: '',
             activeTab: 'photos',
             results: [],
             loading: false,
             error: null
        },
        reducers:{
            setQuery:(actions,state)=>{
                state.query=actions.payloads},
            setLoading:(actions,state)=>{
                 state.loading=true
                 state.error = null
            },
            setError:(state,actions)=>{
                state.error=actions.payload
                state.loading=false
            },
            setActiveTab:(actions,state)=>{
                state.activeTab=actions.payload},
            setResults:(actions,state)=>{
                state.results=actions.payload
                state.loading = false
            },
            clearResults:(state)=>{state.results=[]}
        }
    }
)
export const { Query,setLoading,setError,ActiveTab,setResults,clearResults} = Search.actions
export default Search.reducer