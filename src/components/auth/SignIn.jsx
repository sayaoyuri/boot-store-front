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
  const login = (e) => {
    e.preventDefault();

    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    server.post(`/sign-in`, user)
      .then(({ data }) => {
        console.log(rest);
        localStorage.setItem('user', JSON.stringify(data));
        setInfo({ user: data, ...rest })
        navigate('/');
        console.log(data);
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
        <Title>Login</Title>
        <Form onSubmit={login}>
          <Input placeholder="E-mail" type="email" name="email" />
          <Input placeholder="Senha" type="password" autoComplete="new-password" name="password" />
          <Input type="submit" value="Entrar" />
        </Form>
      </AuthContainer>
    </>
  );
}
