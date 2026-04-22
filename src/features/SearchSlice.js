import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        quary: '',
        result: [],
        error: null,
        loading: false,
    },
    reducers:{
        setQuary: (state, action) => {
            state.quary = action.payload
        },
        setresult: (state, action) => {
            state.result = action.payload
            state.loading = false
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        setLoading: (state, action) => {
            state.loading = true;
            state.error = null;        
        }
    }
})

export const {setQuary, setresult, setError, setLoading} = SearchSlice.actions;
export default SearchSlice.reducer;