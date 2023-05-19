import { useEffect, useState } from 'react'
import './styles/pokeCard.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../store/slices/loading.slice'

const PokeCard = ({ url }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    // dispatch( setLoading( true ))
    axios.get(url)
      .then(res => {
        setPokemon(res.data)
      })
      .catch(() => alert('err in fetch pokemon'))
      // .finally( () => dispatch(setLoading( false )))
  })

  const gif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon?.id}.gif`
  const type = pokemon?.types[0].type.name

  const handleClick = e => {
    navigate(`/pokedex/${e.target.id}`)
  }

  return (
    <div className={`poke-card ${type}`} >
      <div className='poke-card__click' id={pokemon?.name} onClick={handleClick}>

      </div>
      <div  className='poke-card__stats' >

      </div>
      <div className='poke-card__main'>
        <figure>
          <img src={gif} alt="" />
        </figure>
        <h3>{pokemon?.name}</h3>
      </div>
    </div>
  )
}

export default PokeCard