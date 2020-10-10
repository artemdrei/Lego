import React from 'react';
import s from 'styled-components';

const CardStyled = s.div`
  padding: 12px 20px;
  border: 1px solid var(--faint-weak);
  border-radius: 4px;
  margin-bottom: 24px;
`;

const Card: React.FC = ({ children }) => {
  return <CardStyled>{children}</CardStyled>;
};

export default Card;
