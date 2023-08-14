import React from 'react';
import { RegisterForm } from 'components/Form/RegisterForm';
import { Container } from 'components/Container/Container';
import { StyledHeader } from 'components/Header/Header.styled'; 

const RegisterPage = () => {

  return (
    <Container>
      <StyledHeader>Sign Up</StyledHeader>
      <RegisterForm/>

    </Container>
  );
};

export default RegisterPage;
