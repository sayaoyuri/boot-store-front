import { MdSearch, MdShoppingCart } from 'react-icons/md';
import styled from 'styled-components';
import { center } from '../assets/styles/GlobalStyle.js';
import Account from '../components/account/Account.jsx';
import { Link } from 'react-router-dom';

export default function Header() {
  const cart = () => {};
  return (
    <HeaderContainer>
      <Link to="/" className="logo">
        GameStore
      </Link>
      <div className="search">
        <input type="search" name="" id="" />
        <MdSearch size="1.2em" />
      </div>
      <Account />
      <Cart count="0" onClick={cart}>
        <MdShoppingCart size="1.5em" color="#888888" />
      </Cart>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  ${center}
  height: 60px;
  gap: 20px;
  padding: 20px 20px;
  background-color: #aaaaaa;

  .logo {
    font-size: 18px;
    margin: 0px auto 0px 20px;
    text-decoration: none;
    color: #000;
  }
  div.search {
    ${center}
    width: 250px;
    gap: 10px;
  }

  input[type='search'] {
    font-size: 14px;
    display: inline-block;
    height: 20px;
    width: 200px;
    background-color: #dedede;
    border-radius: 5px;
    padding: 10px;
  }
`;

const Cart = styled.div`
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
