import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/Loader'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './pages/Pokedex'
import PokeInfo from './pages/PokeInfo'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllPokemonsThunk } from './store/slices/allPokemons.slice'
import { getPokemonTypesThunk } from './store/slices/pokemonTypes.slice'

function App() {

  const dispatch = useDispatch()
  const { loading } = useSelector( state => state )

  useEffect( () => {
    dispatch( getAllPokemonsThunk( 'https://pokeapi.co/api/v2/pokemon/?limit=1281' ) )
    dispatch( getPokemonTypesThunk( 'https://pokeapi.co/api/v2/type/' ) )
  }, [])

  return (
    <>
      { loading && <Loader />}
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<PokeInfo/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
