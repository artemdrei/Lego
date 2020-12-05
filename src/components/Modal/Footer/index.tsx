import React from 'react';
import s from 'styled-components';

import { IProps } from './types';

const FooterWrapper = s.div<Partial<IProps>>`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || 'flex-end'};
  padding: 20px 32px;
  border-top: 1px solid var(--faint-weak-down);

  button {
    min-width: 132px;
    margin-left: 12px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const Footer: React.FC<IProps> = ({ children, justify }) => {
  return <FooterWrapper justify={justify}>{children}</FooterWrapper>;
};

export default Footer;
