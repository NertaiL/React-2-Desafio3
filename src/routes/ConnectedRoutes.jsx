import {Routes as Rs , Route as R} from 'react-router-dom'
import Home from '../views/Home'
import Pokemon from '../components/Pokemon'
import NotFound from '../views/NotFound'
import Details from '../components/Details'





const ConnectedRoutes = () => {
  return (
    <div>
        <Rs>
            <R path='/' element={<Home />} />
            <R path='/pokemons' element={<Pokemon />} />
            <R path='/pokemons/:name' element={<Details />} /> 
            <R path='*' element={<NotFound />} />
        </Rs>
    </div>
  )
}

export default ConnectedRoutes