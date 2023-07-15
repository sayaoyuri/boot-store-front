import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Infos } from '../../utils/context';
import { Form, Input, Title } from '../../assets/styles/GlobalStyle';
import { server } from '../../utils/core';
import Header from '../Header';
import { AuthContainer } from './AuthContainer';

export default function SignIn() {
  const { setInfo, ...rest } = useContext(Infos);
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    console.log(e.target.password.value, e.target.confirmPassword.value);
    if (e.target.password.value !== e.target.confirmPassword.value) {
      return alert('"Senha" e "Confirme a Senha" devem ser iguais.');
    }
    setInfo({ ...rest, loading: true });

    const info = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    server.post(`/sign-up`, info)
      .then(() => {
        navigate('/auth/sign-in');
        setInfo({ ...rest, loading: false });
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      }); // prettier-ignore
  };

  return (
    <>
      <Header />
      <AuthContainer>
        <Title>Cadastrar</Title>
        <Form onSubmit={signup}>
          <Input placeholder="Nome" type="name" name="name" />
          <Input placeholder="E-mail" type="email" name="email" />
          <Input placeholder="Senha" type="password" autoComplete="new-password" name="password" />
          <Input placeholder="Confirme a senha" type="password" autoComplete="new-password" name="confirmPassword" />
          <Input type="submit" value="Entrar" />
        </Form>
      </AuthContainer>
    </>
  );
}
