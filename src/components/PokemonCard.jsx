import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import "./PokemonCard.css";
import { Container } from "react-bootstrap";

const PokemonCard = ({ pokemonDetails }) => {
  const { name, stats, src, types } = pokemonDetails;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemons`);
  };

  return (
    <Container className="container-card">
      <Card className="card-daddy">
        <article>
          <Card.Img className="card-image" src={src} alt={name} />
        </article>
        <article className="pokemon-body">
          <Card.Body className="card-body">
            <Card.Title className="card-tittle">{name}</Card.Title>
            <Card.Text>
              {stats?.map((stat, i) => (
                <li key={i}>
                  <strong className="card-hability">
                    {stat.name}
                    {/* este vendria siendo los nombres que tiene cada poder o habilidad como hp del personaje, attack,defense etc */}
                  </strong>
                  : {stat.base}{" "}
                  {/* este es el numero de ataque que tiene el personaje */}
                </li>
              ))}
            </Card.Text>
            <Card.Text>{types}</Card.Text>
            {/*  no me trae el types */}
          </Card.Body>
        </article>
      </Card>
      <div className="btn-card">
        <button className="btn btn-warning" onClick={handleClick}>
          Back
        </button>
      </div>
    </Container>
  );
};

export default PokemonCard;
