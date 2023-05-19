import { createSlice } from "@reduxjs/toolkit";

const limitSlice = createSlice({
    name: 'limit',
    initialState: 20,
    reducers: {
        setLimit: (state, action) => action.payload
    }
})

export const { setLimit } = limitSlice.actions
export default limitSlice.reducer