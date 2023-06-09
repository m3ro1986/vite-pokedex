import { useDispatch } from 'react-redux'
import './styles/config.css'
import { setPerPage } from '../store/slices/perPage.slice'
import { setLimit } from '../store/slices/limit.slice'
import { setOffset } from '../store/slices/offset.slice'


const Config = ({ handleOpen, isOpen }) => {

  const dispatch = useDispatch()
  
  const handleClick = (n) => {
    dispatch(setPerPage(n))
    dispatch(setLimit(n))
    dispatch(setOffset(0))
    handleOpen()
  }

  return (
    <div className={`config ${isOpen && 'close'}`}>
      <div className='config__box'>
        <button onClick={handleOpen}>x</button>
        <div className='config__manage'>
          <h3>SETTINGS</h3>
          <p>Pokemons per Page</p>
          <article>
            <button onClick={() => handleClick(20)}>20</button>
            <button onClick={() => handleClick(30)}>30</button>
            <button onClick={() => handleClick(40)}>40</button>
            <button onClick={() => handleClick(50)}>50</button>
            <button onClick={() => handleClick(60)}>60</button>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Config