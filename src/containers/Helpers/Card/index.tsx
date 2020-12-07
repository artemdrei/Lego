import React from 'react';
import s from 'styled-components';

const CardStyled = s.div<IProps>`
  position: ${({ position }) => position};
  padding: 20px 24px;
  border: 1px solid var(--faint-weak);
  border-radius: 4px;
  margin-bottom: 24px;
`;

interface IProps {
  children: React.ReactNode;
  position?: 'relative' | 'absolute' | 'fixed';
}

const Card: React.FC<IProps> = ({ children, position }) => {
  return <CardStyled position={position}>{children}</CardStyled>;
};

export default Card;
