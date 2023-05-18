import './styles/pokedex.css'
import PokedexForm from '../components/PokedexForm'
import PokedexMain from '../components/PokedexMain'
import PokedexHeader from '../components/PokedexHeader'

const Pokedex = () => {

    return (
        <div className='pokedex'>
            <PokedexHeader/>
            <PokedexForm />
            <PokedexMain />
        </div>
    )
}

export default Pokedex