import { configureStore } from '@reduxjs/toolkit'

import trainerName from './slices/trainerName.slice'
import allPokemons from './slices/allPokemons.slice'
import loading from './slices/loading.slice'
import pokemonList from './slices/pokemonList.slice'
import pokemonTypes from './slices/pokemonTypes.slice'
import limit from './slices/limit.slice'
import offset from './slices/offset.slice'
import perPage from './slices/perPage.slice'
import index from './slices/index.slice'

export default configureStore({
    reducer: {
        trainerName,
        loading,
        allPokemons,
        pokemonList,
        pokemonTypes,
        limit,
        offset,
        perPage,
        index

    }   
})