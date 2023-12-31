import axios from "axios"
import { createContext , useEffect , useState } from "react"

const urlPikatchu = 'https://pokeapi.co/api/v2/pokemon'/* llamar solo 30 */
export const PokeContext = createContext()

const PokeProvider = ({children}) => {
    const [pokemons , setPokemons] = useState([])
    const [pokemonSelect, setPokemonSelect] = useState("")
    
const getPoke = async () =>{
    axios
    .get(urlPikatchu)
    .then((response)=>{
        console.log(response);
        setPokemons(response.data.results)
    })
    
    .catch((error)=>{
        console.error("You did not obtain the requested data:",error)
    })
} 
useEffect(()=>{
    getPoke()
},[])

/* const getPoke = async () => {
    try {
        const response = await axios.get(urlPikatchu);
        if (!response.status) {
            throw new Error("Data not found");
        }
        setPokemons(response.data.results);
    } catch (error) {
        console.log(error.message);
    }
};

useEffect(() => {
    getPoke();
}, []); */
    return (
        <PokeContext.Provider value={{pokemons, setPokemons, pokemonSelect, setPokemonSelect}}>
        {children}
    </PokeContext.Provider>
  )
}



export default PokeProvider