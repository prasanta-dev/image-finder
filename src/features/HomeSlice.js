import { createSlice } from "@reduxjs/toolkit";

export const HomeSlice = createSlice({
    name: "Home",
    initialState: {
        homeValue: false,
    },
    reducers:{
        setHome: (state, action) => {
            state.homeValue = action.payload
        }
    }
})

export const {setHome} = HomeSlice.actions;

export default HomeSlice.reducer;