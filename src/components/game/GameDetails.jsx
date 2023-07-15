import { useEffect, useState } from "react";
import styled from "styled-components"
import { server } from "../../utils/core";
import { useNavigate, useParams } from "react-router-dom";

export default function GameDetails ({ id }) {
  const [game, setGame] = useState();
  console.log(game)
  const navigate = useNavigate();

  useEffect(() => {
    server.get(`/games/${id}`)
      .then(res => setGame(res.data))
      .catch(err => {
        console.log(err.response)
        alert('Jogo inexistente!');
        navigate('/');
      });
  }, []);

  if(!game) return <div>Carregando</div>

  return (
    <Container>
      <h1>{`${game.name}, ${game.platform}`}</h1>
      <img src={game.image} />
      <h2>{game.category}</h2>
      <h2>{game.description}</h2>
      <h3>{`R$ ${game.price}`}</h3>
    </Container>
  );
};

const Container = styled.div`
  margin: 150px auto;
  width: 50vw;
  height: 60vh;

  img {
    width: 100%;
    height: 50%;
  }
`;