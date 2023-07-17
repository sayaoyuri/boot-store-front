import styled from 'styled-components';
import { center } from '../../assets/styles/GlobalStyle';
import Header from '../../components/Header';
import { Cart } from '../../components/orders/Cart';

export default function CartPage() {
  /* 
  get /orders  - token.
  */

  return (
    <CartContainer>
      <Header />
      <Cart />
    </CartContainer>
  );
}

const CartContainer = styled.section`
  ${center}
  margin-top: 60px;
  height: 100%;
  gap: 20px;
  padding: 20px 20px;
  background-color: #dedede;
`;
