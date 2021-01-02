import React from 'react';
import s from 'styled-components';

const InputStyled = s.input<Partial<IProps>>`
  height: 32px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
  padding: 8px;
  border-radius: 4px;
  color: var(--font);
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid var(--form-control-border);
  transition: color, background-color, border-color, box-shadow 100ms ease-in-out;

  &:hover:enabled {
    border-color: var(--form-control-border-accent);
  }

  &:focus {
    box-shadow: (--outline);
    outline: none;
  }

  &:disabled {
    opacity: .6;
    background-color: var(--faint-weak-down);
    cursor: not-allowed;
  }

  &::placeholder {
    color: var(--font-weak) * 5% darker;
    font-size: .9rem;
  }
`;

import { IProps } from './types';

const Input: React.FC<IProps> = (props) => {
  const {
    value,
    name,
    id,
    type = 'text',
    placeholder,
    fullWidth,
    disabled,
    autoComplete,
    autoFocus,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    onKeyPress,
    onKeyUp,
  } = props;

  return (
    <InputStyled
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      autoFocus={autoFocus}
      fullWidth={fullWidth}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
    />
  );
};

export default Input;
