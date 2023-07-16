import styled from 'styled-components';
import { Title, center } from '../../assets/styles/GlobalStyle';
import Header from '../../components/Header';

export default function CartPage() {
  /* 
  get /orders  - token.
  */

  return (
    <CartContainer>
      <Header />
      <Title>Carrinho</Title>
    </CartContainer>
  );
}

const CartContainer = styled.section`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  ${center}
  height: 300px;
  gap: 20px;
  padding: 20px 20px;
  background-color: #aaaaaa;
`;
