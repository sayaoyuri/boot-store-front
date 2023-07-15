import styled from "styled-components";
import { SingInContainer } from "./auth/SignInPage";
import Header from "../components/Header";
import GameDetails from "../components/game/GameDetails";
import { useParams } from "react-router-dom";

export default function GameDetailsPage () {
  const { id } = useParams();

  return (
    <Container>
      <Header />
      <GameDetails id={id}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
`;