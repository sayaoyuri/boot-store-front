import styled from 'styled-components';
import { center, Title } from '../../assets/styles/GlobalStyle.js';
import Header from '../Header.jsx';
import { MdClose, MdShoppingCart } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
import { server } from '../../utils/core.js';
import { Infos } from '../../utils/context.jsx';

export function CartLogo() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { order } = useContext(Infos);
  const count = order?.items?.length || 0;

  return (
    <CartLogoContainer count={count} onClick={() => navigate(pathname !== '/cart' ? '/cart' : '/')}>
      <MdShoppingCart size="1.5em" color="#888888" />
    </CartLogoContainer>
  );
}

const CartLogoContainer = styled.div`
  &::after {
    content: '${({ count }) => count}';
    background-color: #efefef;
    z-index: 1000;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1000;
    position: absolute;
    left: 13px;
    top: -3px;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
  }
  filter: drop-shadow(0px 0px 1px #aaaaaa);
`;

export function Cart() {
  const navigate = useNavigate();

  /* 
  get /orders  - token.
  dc0b71f9-5c3b-4ba8-806c-dc730a805ab8
  */
  /* Depois fazer isso no Game Card */
  const { order, user, setInfo, ...info } = useContext(Infos);
  console.log(order, 'order');
  useEffect(() => {
    server
      .get('/order', { headers: { Authorization: `Bearer ${user.token}` } })
      .then(({ data }) => {
        setInfo({ ...info, user, order: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [order]);

  return (
    <CartItemsContainer>
      <Title>{order?.items?.length === 0 && 'Não há Produtos no '}Carrinho</Title>
      <ul>
        {order?.items?.map((i, index) => (
          <CartItem key={index} index={index} image={i.image} name={i.name} price={i.price} />
        ))}
      </ul>
      {order?.items?.length !== 0 && <button onClick={() => navigate('/checkout')}>Continue</button>}
    </CartItemsContainer>
  );
}

const CartItemsContainer = styled.main`
  ${center}
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  ul {
    ${center}
    gap: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  > button {
    position: fixed;
    bottom: 10px;
    margin: 5px 7px;
    font-size: 18px;
    padding: 10px;
    width: 85%;
    cursor: pointer;
    border-radius: 5px;
    background-color: #aaaaaa77;
    font-weight: 500;
  }
`;

const CartItem = ({ index, image, name, price }) => {
  const { order, user, setInfo, ...info } = useContext(Infos);

  const deleteItem = () => {
    server
      .delete(`/order/${index}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then(({ data }) => {
        console.log(data);
        setInfo({ ...info, user, order: order.items.splice(index, 1) });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CartItemContainer>
      <div className="banner">
        <img src={image} />
        <h2>{name}</h2>
      </div>
      <h3>R${price}</h3>
      <button onClick={deleteItem}>
        <MdClose size="1.8em" />
      </button>
    </CartItemContainer>
  );
};

const CartItemContainer = styled.li`
  ${center}

  position: relative;
  gap: 20px;
  .banner {
    ${center}
    flex-direction: column-reverse;
    img {
      width: 300px;
      height: 136px;
      border-radius: 5px;
    }
    h2 {
      text-align: center;
      width: 325px;
      font-family: 'Open Sans', sans-serif;
      margin-bottom: 10px;
    }
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
    position: absolute;
    bottom: 23px;
    right: 15px;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #aaaaaa99;
  }
  button {
    position: absolute;
    top: 48px;
    left: 15px;
    border-radius: 5px;
    background-color: #aaaaaa77;
  }

  @media (max-width: 689px) {
    &:last-child {
      margin-bottom: 50px;
    }
  }
`;
