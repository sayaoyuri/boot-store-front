import styled from "styled-components";
import Header from "../components/Header"
import RegisterGame from "../components/game/RegisterGame";

export default function RegisterGamePage () {
  return (
    <Container>
      <Header />
      <RegisterGame />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  padding: 0px 20px;

  max-width: 448px;
  max-height: 500px;

  background-color: #efefef;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
`;