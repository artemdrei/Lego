import React from 'react';
import styled from 'styled-components';

import { IProps } from './types';
import CheckedIcon from '@root/assets/svg/check.svg';

const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 0.3rem;
`;

const IconWrapper = styled.span`
  position: relative;
  font-size: 0;
`;

const Input = styled.input<IProps>`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 4px;
  border: 1px solid var(--form-control-border);
  transition: border, border-color, box-shadow 100ms ease-in-out;
  outline: none;
  appearance: none;

  & + svg {
    display: none;
  }

  &:checked {
    background-color: var(--accent);

    & + svg {
      display: block;
    }

    &:disabled {
      background-color: var(--accent);
    }
  }

  &:enabled {
    &:hover {
      border-color: var(--form-control-border-accent);
      cursor: pointer;
    }

    &:active,
    &:focus {
      box-shadow: 0 0 0 2px var(--outline);
    }

    & + span {
      cursor: pointer;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: var(--form-control-border-weak);

    & + span {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

const Icon = styled(CheckedIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.8rem;
  height: 0.8rem;
  fill: #fff;
`;

const Label = styled.span`
  font-size: 1rem;
  padding-left: 0.4rem;
`;

const Checkbox: React.FC<IProps> = (props) => {
  const { name, value, label, checked, disabled, onChange } = props;

  return (
    <Wrapper>
      <IconWrapper>
        <Input
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <Icon />
      </IconWrapper>
      {label && <Label>{label}</Label>}
    </Wrapper>
  );
};

export default Checkbox;
