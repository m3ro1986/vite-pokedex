import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: null,
    reducers: {
        getTrainerName: ( state, action ) => action.payload
    }
})

export const { getTrainerName } = trainerNameSlice.actions
export default trainerNameSlice.reducer