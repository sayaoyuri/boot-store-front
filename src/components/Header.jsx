import { MdSearch, MdShoppingCart } from 'react-icons/md';
import styled from 'styled-components';
import { center } from '../assets/styles/GlobalStyle.js';
import Account from './auth/Account.jsx';
import { Link } from 'react-router-dom';
import { CartLogo } from './orders/Cart.jsx';

export default function Header() {
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
      <CartLogo />
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
  z-index: 1;

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
    @media (max-width: 600px) {
      display: none;
    }
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
