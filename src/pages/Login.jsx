import './styles/login.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getTrainerName } from '../store/slices/trainerName.slice'
import { getPokemonList } from '../store/slices/pokemonList.slice'

const Login = () => {

  const { allPokemons } = useSelector( state => state )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch( getTrainerName( e.target.firstChild.value.trim() ) )
    dispatch( getPokemonList( allPokemons.map( pokemon => pokemon.name )) )
    navigate( '/pokedex' )
  }

  console.log( 'log in login')
  return (
    <div className='login'>
      <header>
        <h3>Hello Trainer!</h3>
        <figure></figure>
      </header>
      <p>Give me your name to start.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Go</button>
      </form>
    </div>
  )
}

export default Login