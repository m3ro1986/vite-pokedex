import { createSlice } from "@reduxjs/toolkit";

const pokemonListSlice = createSlice({
    name: 'pokemonList',
    initialState: null,
    reducers: {
        getPokemonList: ( state, action ) => action.payload
    }
})

export const { getPokemonList } = pokemonListSlice.actions
export default pokemonListSlice.reducer