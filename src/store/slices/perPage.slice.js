import { createSlice } from "@reduxjs/toolkit";

const perPageSlice = createSlice({
    name: 'perPage',
    initialState: 20,
    reducers: {
        setPerPage: (state, action) => action.payload
    }
})

export const { setPerPage } = perPageSlice.actions
export default perPageSlice.reducer