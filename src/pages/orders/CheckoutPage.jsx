import styled from 'styled-components';
import { center, Title } from '../../assets/styles/GlobalStyle.js';
import { useContext, useEffect, useState } from 'react';
import { server } from '../../utils/core.js';
import { Infos } from '../../utils/context.jsx';
import Header from '../../components/Header.jsx';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { order, user, setCount, setInfo, ...info } = useContext(Infos);
  const [updating, setUpdating] = useState(false);
  useEffect(() => {
    server
      .get('/order', { headers: { Authorization: `Bearer ${user.token}` } })
      .then(({ data }) => {
        setInfo({ ...info, user, order: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [updating]);

  const comprar = () => {
    server
      .post('/order/checkout', {}, { headers: { Authorization: `Bearer ${user.token}` } })
      .then(({ data }) => {
        setUpdating(!updating);
        setCount(0);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CheckoutContainer>
      <Header />
      <CheckoutItemsContainer>
        <Title>Checkout - {order?.date.value}</Title>
        <h2 className="log">{order?.items.length === 0 && 'Comprar Finalizada'}</h2>
        <ul>
          {order?.items.map((i, index) => (
            <CheckoutItem key={index} image={i.image} name={i.name} price={i.price} />
          ))}
        </ul>
        {order?.items.length === 0 ? (
          <button onClick={() => navigate('/')}>Voltar Para o Home</button>
        ) : (
          <button onClick={comprar}>Comprar - R${order?.total.toFixed(2)}</button>
        )}
      </CheckoutItemsContainer>
    </CheckoutContainer>
  );
}

const CheckoutContainer = styled.section`
  ${center}
  margin-top: 60px;
  height: 100%;
  gap: 20px;
  padding: 20px 20px;
  background-color: #dedede;
`;

const CheckoutItemsContainer = styled.main`
  ${center}
  flex-direction: column;
  gap: 7.5px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  .log {
    margin-top: 5px;
  }
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

const CheckoutItem = ({ image, name, price }) => {
  return (
    <CheckoutItemContainer>
      <div className="banner">
        <img src={image} />
        <h2>{name}</h2>
      </div>
      <h3>R${price}</h3>
    </CheckoutItemContainer>
  );
};

const CheckoutItemContainer = styled.li`
  ${center}

  position: relative;
  gap: 10px;
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
