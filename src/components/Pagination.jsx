
import './styles/pagination.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLimit } from '../store/slices/limit.slice'
import { setOffset } from '../store/slices/offset.slice'
import { setIndex } from '../store/slices/index.slice'

const Pagination = () => {

    const dispatch = useDispatch()
    const { perPage, index, limit, allPokemons } = useSelector(state => state)
    const qtyPokemons = allPokemons.length
    const qtyButtons = Math.ceil( allPokemons.length / perPage )
    const indexs = Math.ceil( qtyButtons / 10 )

    const arrayButtons = () => {
        const array = []
        for ( let i = 1; i <= qtyButtons; i++ ) {
            array.push(i)
        } 
        return array
    }

    const paginationBtns = () => {
        const array = []
        let firstIndex = 0
        let lastIndex = 10
        for ( let i = 0; i < indexs; i++ ) {
            array.push( arrayButtons().slice(firstIndex, lastIndex))
            firstIndex += 10
            lastIndex += 10
        }
        return array
    }

    const handleClick = e => {
        if( perPage * e.target.value <= qtyPokemons ) {
            dispatch( setOffset( perPage * e.target.value - perPage ) )
            dispatch( setLimit( perPage * e.target.value ) )
        } else {
            dispatch( setOffset( perPage * e.target.value - perPage ) )
            dispatch( setLimit( qtyPokemons ) )
        }
    }

    const handlePaginationsBtn = (btn) => {
        btn === 'last'
            ? dispatch(setIndex( index - 1))
            : dispatch(setIndex( index + 1))
    }


    return (
        <div className='pagination'>
            {
                index !== 0 && <button onClick={ () => handlePaginationsBtn('last')}>last</button>
            }
            {
                paginationBtns()[index].map( (btn, i) => (
                    <button key={i} value={btn} onClick={handleClick}>{ btn }</button>
                ))
            }
            {
                !(index === paginationBtns().length - 1) && <button onClick={ () => handlePaginationsBtn('next')}>next</button>
            }

        </div>
    )
}

export default Pagination