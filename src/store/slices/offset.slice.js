import { createSlice } from "@reduxjs/toolkit";

const offsetSlice = createSlice({
    name: 'offset',
    initialState: 0,
    reducers: {
        setOffset: (state, action) => action.payload
    }
})

export const { setOffset } = offsetSlice.actions
export default offsetSlice.reducer