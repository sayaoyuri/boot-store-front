import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignIn from '../../components/auth/SignIn';

export default function SignInPage() {
  return (
    <SingInContainer>
      <SignIn />
      <Link to="/auth/sign-up">Primeira vez? Cadastre-se!</Link>
      <Link to="#">Esqueceu a Senha?</Link>
    </SingInContainer>
  );
}

const SingInContainer = styled.section`
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
