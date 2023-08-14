import React from 'react';
import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/Form/LoginForm';
import { StyledHeader } from 'components/Header/Header.styled'; 

const Login = () => {

  return (
    <Container>
      <StyledHeader>Login</StyledHeader>
      <LoginForm/>
    </Container>
  );
};

export default Login;
