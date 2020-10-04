import React from 'react';
import s from 'styled-components';

const ContainerStyled = s.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

const Container: React.FC = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
