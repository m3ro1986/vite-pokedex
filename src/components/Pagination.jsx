
import './styles/pagination.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLimit } from '../store/slices/limit.slice'
import { setOffset } from '../store/slices/offset.slice'

const Pagination = () => {

    const dispatch = useDispatch()
    const [btnArray, setBtnArray] = useState()
    const [firstBtn, setFirstBtn] = useState(0)
    const {offset, limit, allPokemons} = useSelector( state => state)
    const qty = allPokemons.length
    const perPage =  Math.ceil( qty / limit ) > 10 ? 10 : Math.ceil( qty / limit )

    useEffect( () => {
        const array = []
        array.push('<')
        for(let i = 1; i <= perPage; i++) {
            array.push(i)
        }
        if (Math.ceil( qty / limit ) > 10) { 
            array.push('...')
            array.push( Math.ceil( qty / limit ) ) }
        array.push('>')
        setBtnArray(array)
    }, [allPokemons, limit])

    const changePage = e => {
        
    }

console.log(btnArray)

  return (
    <div className='pagination'>
        {
            btnArray?.map( btn => (
                <button key={btn} onClick={changePage}>{btn}</button>
            ))
        }
    </div>
  )
}

export default Pagination