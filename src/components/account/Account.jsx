import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Infos } from '../../utils/context';
import styled from 'styled-components';
import { useState } from 'react';
import { MdPerson } from 'react-icons/md';

export default function Account() {
  const { user } = useContext(Infos);
  const navigate = useNavigate();
  const [account, setAccount] = useState(false);

  return (
    <AccountContainer>
      {account && (
        <ul>
          <li>User Name</li>
          <li>User Name</li>
        </ul>
      )}
      <button onClick={() => useState(!user ? navigate('/auth/sign-in') : setAccount(true))}>
        <MdPerson size="1.5em" />
        {!user ? 'Entrar' : 'Usuário'}
      </button>
    </AccountContainer>
  );
}

const AccountContainer = styled.div`
  button {
    display: flex;
    height: 20px;
    svg {
      margin-right: 10px;
    }
    background-color: inherit;
    text-align: center;
    line-height: 20px;
  }
  ul {
    position: absolute;
    background-color: #dedede;
    width: 200px;
    height: 200px;
    top: 0px;
    right: 0px;
    z-index: -1;
  }
`;
