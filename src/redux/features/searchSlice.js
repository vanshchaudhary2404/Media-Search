import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({

  name:"search",
  initialState:{
    query:'',
    activeTab:'photos',
    results:[],
    loading:false,
    error:null
  },
  reducers:{
    setQuery(state,action){
      state.query = action.payload
    },
    setActiveTabs(state , action){
      state.activeTab = action.payload
    },
    setResults(state, action){
      state.results = action.payload
      state.loading = false
    },
    setLoading(state){
      state.loading = true
      state.error = null
    },
    setError(state, action){
      state.error = action.payload
    },
    clearResults(state , action){
      state.clearResults = []
    },
  }
}) 


export const {
  setQuery,
  setActiveTabs, 
  setError, 
  setLoading, 
  setResults, 
  clearResults } = searchSlice.actions

export default searchSlice.reducer;