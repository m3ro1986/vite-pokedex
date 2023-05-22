import { createSlice } from "@reduxjs/toolkit";

const indexSlice = createSlice({
    name: 'index',
    initialState: 0,
    reducers: {
        setIndex: (state, action) => action.payload
    }
})

export const { setIndex } = indexSlice.actions
export default indexSlice.reducer