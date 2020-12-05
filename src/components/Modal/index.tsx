import React, { useEffect, useRef, memo } from 'react';
import s from 'styled-components';

import { IProps } from './types';

import Footer from './Footer';
import Body from './Body';
import Header from './Header';

const Wrapper = s.div<Partial<IProps>>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index; var(--modal-z-index);
  background-color: rgba(0, 0, 0, 0.36);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ opened }) => (opened ? 1 : 0)};
  visibility: ${({ opened }) => (opened ? 'visible' : 'hidden')};
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Container = s.div<Partial<IProps>>`
  display: flex;
  max-height: calc(100% - 64px);
  flex-direction: column;
  width: ${({ size }) => (size === 'lg' ? 776 : size === 'sm' ? 456 : 536)}px;
  border: 1px solid var(--faint-weak);
  border-radius: 4px;
  background-color: #fff;
`;

const Dialog: React.FC<IProps> = (props) => {
  const { children, opened, onClose } = props;
  const ref = useRef(null);

  const onEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const onClickOutside = (e: { target: unknown }) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onEscape, true);
    document.addEventListener('click', onClickOutside, true);
    return () => {
      document.removeEventListener('keydown', onEscape, true);
      document.removeEventListener('click', onClickOutside, true);
    };
  });

  return <Wrapper opened={opened}>{opened && <Container ref={ref}>{children}</Container>}</Wrapper>;
};

const Modal = {
  Dialog: memo(Dialog),
  Header: memo(Header),
  Body: memo(Body),
  Footer: memo(Footer),
};

export default Modal;
