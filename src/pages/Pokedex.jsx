import './styles/pokedex.css'
import PokedexForm from '../components/PokedexForm'
import PokedexMain from '../components/PokedexMain'
import PokedexHeader from '../components/PokedexHeader'
import Config from '../components/Config'
import Pagination from '../components/Pagination'
import { useState } from 'react'

const Pokedex = () => {
    
    const [isOpen, setIsOpen] = useState(true)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='pokedex'>
            <Config 
                handleOpen={handleOpen}
                isOpen={isOpen}
            />
            <PokedexHeader/>
            <PokedexForm handleOpen={handleOpen}/>
            <Pagination/>
            <PokedexMain/>
        </div>
    )
}

export default Pokedex