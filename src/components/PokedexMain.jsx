import './styles/pokedexMain.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import PokeCard from './PokeCard'

const PokedexMain = () => {

  const { allPokemons } = useSelector( state => state )
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)

  return (
    <div className='pokedex-main'>
      {
        allPokemons.slice(offset, limit).map( pokemon => (
          <PokeCard 
            key={ pokemon.url ? pokemon.url : pokemon.pokemon.url } 
            url={ pokemon.url ? pokemon.url : pokemon.pokemon.url }
          />
        ))
      }
    </div>
  )
}

export default PokedexMain