import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./loading.slice";

const allPokemonsSlice = createSlice({
    name: 'allPokemons',
    initialState: null,
    reducers: {
        getAllPokemons: ( state, action ) => action.payload
    }
})

export const getAllPokemonsThunk = (url) => dispatch => {
    dispatch( setLoading( true ) )
    axios.get(url)
        .then( res => dispatch( getAllPokemons( res.data.results ? res.data.results : res.data.pokemon ) ) )
        .catch( () => alert('error in fetching allPokemosThunk'))
        .finally( () => dispatch( setLoading( false ) ) )
}

export const { getAllPokemons } = allPokemonsSlice.actions
export default allPokemonsSlice.reducer