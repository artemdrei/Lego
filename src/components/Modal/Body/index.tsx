import React from 'react';
import s from 'styled-components';

import { IProps } from './types';

const BodyWrapper = s.div`
  padding: 24px;
  color: var(--font);
  overflow: auto;
`;

const Body: React.FC<IProps> = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};

export default Body;
