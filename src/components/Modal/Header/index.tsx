import React from 'react';
import s from 'styled-components';

import { IProps } from './types';

import Typography from '../../Typography';
import Button from '../../Button';

import CloseIcon from '@root/assets/svg/close.svg';

const HeaderWithBorder = s.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 16px 24px;
  background-color: var(--faint-weak-down);
  border-bottom: 1px solid var(--faint-weak);
`;

const Header: React.FC<IProps> = ({ title, onClose }) => {
  return (
    <HeaderWithBorder>
      <Typography tag="h2" variant="h6" marginBottom={0} marginTop={0} color="var(--font-accent)">
        {title}
      </Typography>
      {onClose && (
        <Button
          size="small"
          variant="icon"
          color="secondary"
          aria-label="Close Modal Button"
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      )}
    </HeaderWithBorder>
  );
};

export default Header;
