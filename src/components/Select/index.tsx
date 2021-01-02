import React from 'react';
import s from 'styled-components';

import { IProps } from './types';

import ArrowIcon from '@root/assets/svg/arrow-down.svg';

const Wrapper = s.span<Partial<IProps>>`{
  position: relative;

  svg {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    z-index: 1;
    pointer-events:none;

    path {
      fill: var(--font)
    }
  }

}`;

const Label = s.label`{
  font-size: 0;
}`;

const SelectStyled = s.select`{
  z-index: 1;
  position: relative;
  height: 32px;
  padding-left: 12px;
  padding-right: 30px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid var(--form-control-border);
  color: var(--font);
  outline: none;

  // Replace arrow
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
  background-position: right 8px top 58%;
  background-repeat: no-repeat;
  background-size: 16px;

  &:focus:enabled {
    box-shadow: var(--outline);
  }

  :disabled {
    opacity: .6;

    + svg {
      opacity: .6;
    }
  }

  &:hover:disabled {
    cursor: not-allowed;
  }
  
}`;

const Option = s.option`{
  color: var(--font);
}`;

const Select: React.FC<IProps> = (props) => {
  const { name, ariaLabel, data, value, disabled, onChange } = props;

  return (
    <Wrapper>
      <Label id={ariaLabel}>{ariaLabel}</Label>
      <SelectStyled
        name={name}
        value={value}
        disabled={disabled}
        aria-labelledby={ariaLabel}
        onChange={onChange}
      >
        {data.map(({ value, label }, i) => {
          return (
            <Option key={value + i} value={value}>
              {label}
            </Option>
          );
        })}
      </SelectStyled>
      <ArrowIcon />
    </Wrapper>
  );
};

export default Select;
