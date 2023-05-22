import { useNavigate } from 'react-router-dom'
import { getAllPokemonsThunk } from '../store/slices/allPokemons.slice'
import './styles/pokedexForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { setIndex } from '../store/slices/index.slice'
import { setLimit } from '../store/slices/limit.slice'
import { setOffset } from '../store/slices/offset.slice'

const PokedexForm = ({handleOpen}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { perPage, trainerName, pokemonTypes, pokemonList } = useSelector(state => state)

  const handleSubmit = e => {
    e.preventDefault()
    if (pokemonList.includes(e.target.firstChild.value.trim().toLowerCase())) {
      navigate(`/pokedex/${e.target.firstChild.value.trim().toLowerCase()}`)
    } else {
      alert('that pokemon does not exist!!!')
    }
    e.target.firstChild.value = ''
  }

  const handleChange = e => {
    dispatch(getAllPokemonsThunk(
      e.target.value === 'all'
        ? 'https://pokeapi.co/api/v2/pokemon/?limit=1281'
        : `https://pokeapi.co/api/v2/type/${e.target.value}`
    ))
    dispatch(setLimit(perPage))
    dispatch(setOffset(0))
    dispatch(setIndex(0))
  }

  return (
    <>
      <div className='pokedex-form'>
        <div className='pokedex-form__welcome'>
          <p>Welcome <span>{trainerName}</span>, here you can find your favorite POKEMON!</p>
          <i className='bx bxs-cog' onClick={handleOpen}></i>
        </div>
        <div className='pokedex-form__options'>
          <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>Search</button>
          </form>
          <div>
            <span>Choose Type</span>
            <select onChange={handleChange}>
              <option value="all">all-Pokemons</option>
              {
                pokemonTypes.map(type => (
                  <option value={type.name} key={type.name}> {type.name} </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokedexForm