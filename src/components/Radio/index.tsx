import React from 'react';
import styled from 'styled-components';

import { IProps } from './types';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const Input = styled.input<IProps>`
  width: 1.3rem;
  height: 1.3rem;
  margin: 0;
  border-radius: 50%;
  border: 1px solid var(--form-control-border);
  transition: border, border-color, box-shadow 100ms ease-in-out;
  outline: none;
  appearance: none;

  &:enabled {
    &:hover {
      border-color: var(--form-control-border-accent);
      cursor: pointer;
    }

    &:checked {
      border: 4px solid var(--accent-down);
    }

    &:active,
    &:focus {
      box-shadow: var(--outline);
    }

    & + span {
      cursor: pointer;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;

    & + span {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

const Span = styled.span`
  font-size: 1rem;
  padding-left: 0.4rem;
`;

const RadioButton: React.FC<IProps> = (props) => {
  const { name, value, groupValue, label, checked, disabled, onChange } = props;
  const isChecked = checked || groupValue === value;

  return (
    <Label>
      <Input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
      />
      <Span>{label}</Span>
    </Label>
  );
};

export default RadioButton;
