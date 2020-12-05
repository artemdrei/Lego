import React from 'react';
import styled from 'styled-components';
// TODO:: replace with base import for all project
import s from '@root/assets/styles/index.scss';

import { IProps } from './types';

const button = {
  height: {
    small: '30px',
    medium: '36px',
    big: '42px',
  },
  font: {
    small: '0.8125rem',
    medium: '0.875rem',
    big: '0.9375rem',
  },
  padding: {
    small: '4px 8px 2px',
    medium: '6px 12px 4px',
    big: '8px 20px 6px',
  },
  colors: {
    primary: `var(--accent)`,
    secondary: `var(--faint-weak)`,
    danger: `var(--danger)`,
  },
  icon: {
    padding: {
      small: '6px',
      medium: '9px',
      big: '12px',
    },
  },
  disabled: {
    opacity: '.6',
  },
};

const base = `
  display: inline-block;
  outline: none;
  text-decoration: none;
  border-radius: 4px;
  text-align: center;

  svg {
    width: 1rem;
    height: 1rem;
    vertical-align: middle;
    margin-top: -4px;
    margin-right: 4px;
  }
`;

const getColor = ({ color = 'primary', variant = 'regular', size = 'medium' }: IProps) => {
  const btnColor = button.colors[color];
  const isSecondary = color === 'secondary';

  const commonStyles = `
    transition: color, background-color, border-color, box-shadow 100ms ease-in-out;

    &:focus:enabled {
      box-shadow: 0 0 0 3px var(--outline);
    }

    &:disabled {
      opacity: ${button.disabled.opacity}
    }

    &:hover {
      cursor: pointer;
    }

    &:hover:disabled {
      cursor: not-allowed;
    }
  `;

  const regularFontColor = isSecondary ? 'var(--button-color)' : 'var(--button-color-weak)';
  const hoverBg = isSecondary ? btnColor.replace(')', '-down)') : btnColor.replace(')', '-up)');
  const activeBg = isSecondary ? btnColor.replace(')', '-up)') : btnColor.replace(')', '-down)');
  const activeIconBg = isSecondary ? btnColor.replace(')', '-up)') : btnColor.replace(')', '-weak-down)');
  const regularStyles = `
    color: ${regularFontColor};
    background-color: ${btnColor};
    border: 1px solid transparent;

    &:hover:enabled {
      background-color: ${hoverBg};
    }

    &:active:enabled {
      background-color: ${activeBg};
    }

    path {
      fill: ${regularFontColor};
    }
  `;

  const outlineStyles = `
    color: var(--button-color);
    background-color: transparent;
    border: 1px solid ${isSecondary ? 'var(--faint)' : btnColor};

    &:hover:enabled {
      background-color: ${isSecondary ? hoverBg : btnColor.replace(')', '-weak-up)')};
    }

    &:active:enabled {
      background-color: #fff;
    }

    path {
      fill: var(--button-color);
    }
  `;

  const linkFontColor = isSecondary ? 'var(--button-color)' : btnColor;
  const linkStyles = `
    color: ${linkFontColor};
    background: transparent;
    border: none;
    text-decoration: underline;

    &:hover:enabled {
      text-decoration: none;
    }

    &:active:enabled {
      opacity: ${button.disabled.opacity}
    }

    path: {
      fill: ${linkFontColor}
    }
  `;

  const iconStyles = `
    padding: ${button.icon.padding[size]};
    background-color: transparent;
    border: 1px solid transparent;
    line-height: 1;
    
    svg {
      margin-top: 0;
      margin-right: 0;
    }

    path {
      fill: ${isSecondary ? 'var(--button-color)' : btnColor};
    }

    &:hover:enabled {
      border: 1px solid  ${isSecondary ? 'var(--faint)' : btnColor};
    }

    &:active:enabled {
      background-color: ${activeIconBg};
    }
  `;

  return `
    ${variant === 'regular' ? regularStyles : ''}
    ${variant === 'outline' ? outlineStyles : ''}
    ${variant === 'link' ? linkStyles : ''}
    ${variant === 'icon' ? iconStyles : ''}
    ${commonStyles}
  `;
};

const getSize = ({ size = 'medium', variant }: IProps) => {
  if (variant === 'icon') return null;

  return `
    line-height: 1.75;
    padding: ${button.padding[size]};
    font-size: ${button.font[size]};
  `;
};

const ButtonStyled = styled('button')<IProps>`
  ${s};
  ${base};
  ${getSize};
  ${getColor};
`;

const LinkStyled = styled('a')<IProps>`
  ${base};
  ${getSize};
  ${getColor};

  &:hover:not([aria-disabled='true']) {
    text-decoration: none;
    opacity: ${button.disabled.opacity};
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: ${button.disabled.opacity};
  }
`;

const Button: React.FC<IProps> = ({ children, label, href, target, ...props }) => {
  let disabled = null;
  if (props.disabled) {
    disabled = href ? { 'aria-disabled': true } : { disabled: true };
    delete props['disabled'];
  }

  if (href) {
    return (
      <LinkStyled href={href} target={target} {...disabled} {...props}>
        {children}
        {label}
      </LinkStyled>
    );
  }

  return (
    <ButtonStyled {...disabled} {...props}>
      {children}
      {label}
    </ButtonStyled>
  );
};

export default Button;
