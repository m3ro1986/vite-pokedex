import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./loading.slice";

const pokemonTypesSlice = createSlice({
    name: 'pokemonTypes',
    initialState: null,
    reducers: {
        getPokemonTypes: ( state, action ) => action.payload
    }
})

export const getPokemonTypesThunk = (url) => dispatch => {
    dispatch( setLoading( true ) )
    axios.get(url)
        .then( res => dispatch( getPokemonTypes( res.data.results ) ) )
        .catch( () => alert('error in fetching getPokemonTypesThunk'))
        .finally( dispatch( setLoading( false ) ) )
}

export const { getPokemonTypes } = pokemonTypesSlice.actions
export default pokemonTypesSlice.reducer