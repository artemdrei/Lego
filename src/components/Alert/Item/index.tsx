import React, { memo, useEffect, useState } from 'react';
import s, { css } from 'styled-components';

import { IAlertStyled } from '../types';

import { sleep } from '@root/utils';
import { animations } from './animations';

import Button from '../../Button';
import Typography from '../../Typography';
import CloseIcon from '@root/assets/svg/close.svg';

const AlertStyled = s.div<Partial<IAlertStyled>>`{
  display: flex;
  justify-content: space-between;
  width: 320px;
  ${({ variant }) => {
    switch (variant) {
      case 'success':
        return `background-color: var(--success)`;
      case 'error':
        return `background-color: var(--danger)`;
      case 'warning':
        return `background-color: var(--warning)`;
      case 'info':
        return `background-color: var(--accent)`;
    }
  }};
  padding: 8px 8px 20px 16px;
  margin-bottom: 12px;
  border-radius: 4px;
  color: #fff;
  
  animation: ${(props) =>
    props.closed
      ? css`
          ${animations.fadeOut} ${animations.outDuration}ms forwards;
        `
      : css`
          ${animations.fadeIn} ${animations.inDuration}ms forwards;
        `};
  button {
    align-self: self-start;
    margin-left: 12px;

    &:active:enabled {
      background-color: transparent;
      opacity: 1;
    }

    &:hover:enabled {
      opacity: .8;
      border-color: #fff;
    }
  }

  path {
    fill: #fff;
  }
}`;

const Alert: React.FC<IAlertStyled> = (props) => {
  const { _id, _remove, title, body, variant, children, position, autoHideDelay } = props;
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const _timerId = setTimeout(async () => {
      await onClose();
    }, autoHideDelay);

    return () => {
      clearTimeout(_timerId);
    };
  }, []);

  const onClose = async () => {
    setClosed(true);
    const DELAY_BEFORE_REMOVE = 200; // needed for animation
    await sleep(+animations.outDuration + DELAY_BEFORE_REMOVE);
    _remove(_id);
  };

  return (
    <AlertStyled variant={variant} position={position} closed={closed}>
      <div>
        {title && (
          <Typography cutText variant="subtitle" marginTop={12} marginBottom={0} color="#fff">
            {title}
          </Typography>
        )}
        {body && <Typography color="#fff">{body}</Typography>}
        {children}
      </div>
      <Button variant="icon" onClick={onClose}>
        <CloseIcon />
      </Button>
    </AlertStyled>
  );
};

export default memo(Alert);
