import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import login_banner from '../images/login_banner.svg';
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className='container'>
        <img src={login_banner} alt='github user' />
        <h2>github user search</h2>
        <button className='btn' onClick={loginWithRedirect}>
          Log In / Sign Up
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 90vh;
  display: grid;
  place-items: center;
  .container 
  {
    width: 90vw;
    max-width: 450px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
