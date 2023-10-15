import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { Container } from "react-bootstrap";
import "./Pokemon.css";

const Pokemon = () => {
  const { pokemons, pokemonSelect, setPokemonSelect } =
    useContext(PokeContext);
  /*  const [pokemonSelect, setPokemonSelect] = useState("") */
  const navigate = useNavigate();

  const goToPokemons = async () => {
    if (pokemonSelect) {
      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: `Navigating to ${pokemonSelect} details`,
        timer: 1500, // esto es opcional, cierra la alerta después de 1.5 segundos
      });
      navigate(`/pokemons/${pokemonSelect}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "You Made A Mistake",
        text: "Select A Pokemon",
      });
    }
  };
  return (
    <Container>
      <h2>Selecciona un pokemon</h2>
      <select
        className="selectpokemons"
        value={pokemonSelect}
        onChange={({ target }) => setPokemonSelect(target.value)}
      >
        {" "}
        <option value="" disabled>
          Select your favorite pokemon
        </option>
        {pokemons.map(({ name }, i) => (
          <option key={i} value={name}>
            {name}
          </option>
        ))}
      </select>

      <Button onClick={goToPokemons} variant="dark">
        Details
      </Button>
    </Container>
  );
};
export default Pokemon;
