import Header from '../components/Header.jsx';
import styled from 'styled-components';
import { center, Title } from '../assets/styles/GlobalStyle.js';
import { useContext, useEffect } from 'react';
import { Infos } from '../utils/context.jsx';
import { server } from '../utils/core.js';
import { Link } from 'react-router-dom';

export default function Home() {
  const { games, user, setInfo, ...info } = useContext(Infos);
  useEffect(() => {
    server
      .get('/games', { headers: { Authorization: `Bearer ${user?.token}` } })
      .then(({ data }) => {
        setInfo({ ...info, user, games: data });
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HomeContainer>
        <Header />
        <ItemsMain>
          <Title>Mais Populares!</Title>
          <ul>
            {games?.map((i, index) => (
              <Item key={index} id={i._id} image={i.image} name={i.name} price={i.price} />
            ))}
          </ul>
        </ItemsMain>
        <footer>
          <Link to="/register-game">Adicionar mais Jogos!</Link>
        </footer>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.section`
  margin-top: 60px;
  height: 100%;
  gap: 20px;
  padding: 20px 20px;
  background-color: #dedede;
  footer {
    width: max-content;
    height: 30px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 500;
  }
`;

const ItemsMain = styled.main`
  ${center}
  flex-direction: column;
  gap: 7.5px;
  height: 100%;
  width: 100%;
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

const Item = ({ id, image, name, price }) => {
  let { games, order, user, setInfo, count, setCount, ...info } = useContext(Infos);

  const addOnCart = () => {
    server
      .get(`/games/${id}`, { headers: { Authorization: `Bearer ${user.token}` } })
      .then(({ data }) => {
        const { name, category, price, image, platform } = data;
        console.log(name, category, price, image, platform, 'aqui', data);
        server
          .post(
            '/order',
            { name, category, price, image, platform },
            { headers: { Authorization: `Bearer ${user.token}` } }
          )
          .then((data) => {
            console.log(data);
            setCount(++count);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ItemContainer>
      <div className="banner">
        <img src={image} />
        <h2>{name}</h2>
      </div>
      <div onClick={addOnCart}>
        <button>Add Ao Carrinho</button>
        <h3>R${price}</h3>
      </div>
    </ItemContainer>
  );
};

const ItemContainer = styled.li`
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
    right: 25px;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #aaaaaa99;
  }
  button {
    width: 120px;
    height: 40px;
    position: absolute;
    top: 48px;
    left: 20px;
    border-radius: 5px;
    background-color: #aaaaaa77;
  }

  @media (max-width: 689px) {
    &:last-child {
      margin-bottom: 50px;
    }
  }
`;
