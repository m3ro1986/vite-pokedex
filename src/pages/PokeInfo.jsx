import './styles/pokeInfo.css'
import { useParams } from 'react-router-dom'
import PokedexHeader from '../components/PokedexHeader'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PokeInfo = () => {


    const { name } = useParams()
    const [pokemon, setPokemon] = useState()
    const [specie, setSpecie] = useState()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => setPokemon(res.data))
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then(res => setSpecie(res.data))
    }, [name])

    const svg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`
    const front_default = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`
    const front_shiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon?.id}.png`
    const back_default = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon?.id}.png`
    const back_shiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon?.id}.png`

    const type = pokemon?.types[0].type.name

    return (
        <div className='poke-info'>
            <PokedexHeader />
            <div className='poke-info__cards'>
                <div className='poke-info__card'>
                    <figure className={`poke-info__figure ${type}`}>
                        <img src={svg} alt="" />
                    </figure>
                    <main className='poke-info__main'>
                        <h2>{pokemon?.name}</h2>
                        <ul className='poke-info__types'>
                            {
                                pokemon?.types.map(type => (
                                    <li key={type.type.name} className={type.type.name}>{type.type.name}</li>
                                ))
                            }
                        </ul>
                        <ul className='poke-info__measures'>
                            <li>
                                <span>{pokemon?.weight / 10} kg</span>
                                <span>Weight</span>
                            </li>
                            <li>
                                <span>{pokemon?.height / 10} mtrs</span>
                                <span>height</span>
                            </li>
                        </ul>
                    <article className='poke-info__images'>
                        <figure><img src={front_default} alt="" /></figure>
                        <figure><img src={back_default} alt="" /></figure>
                        <figure><img src={front_shiny} alt="" /></figure>
                        <figure><img src={back_shiny} alt="" /></figure>
                    </article>
                    </main>
                </div>
                <div className='poke-info__card2'>
                    <main>
                        <article>
                            <h3>Base Stats</h3>
                            <ul className='poke-info__stats'>
                                <li className='stats_li'> <span>Hp</span> <div className='stats__bases'> <div style={{ backgroundColor: 'red', width: `${pokemon?.stats[0].base_stat / 250 * 100}%` }}></div> </div> </li>
                                <li className='stats_li'> <span>Atk</span> <div className='stats__bases'> <div style={{ backgroundColor: 'yellow', width: `${pokemon?.stats[1].base_stat / 250 * 100}%` }}></div> </div> </li>
                                <li className='stats_li'> <span>Def</span> <div className='stats__bases'> <div style={{ backgroundColor: 'blue', width: `${pokemon?.stats[2].base_stat / 250 * 100}%` }}></div> </div> </li>
                                <li className='stats_li'> <span>spd</span> <div className='stats__bases'> <div style={{ backgroundColor: 'grey', width: `${pokemon?.stats[5].base_stat / 250 * 100}%` }}></div> </div> </li>
                                <li className='stats_li'> <span>Exp</span> <div className='stats__bases'> <div style={{ backgroundColor: 'green', width: `${pokemon?.base_experience / 1000 * 100}%` }}></div> </div> </li>
                            </ul>
                        </article>
                        <h3 className={pokemon?.types[0].type.name}> <span >more info</span></h3>
                        <ul className='other_stats'>
                            <li>Baby: <span>{specie?.is_baby ? 'True' : 'False'}</span></li>
                            <li>Legendary: <span>{specie?.is_legendary ? 'True' : 'False'}</span></li>
                            <li>Mythical: <span>{specie?.is_mythical ? 'True' : 'False'}</span></li>
                        </ul>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default PokeInfo