import React from 'react';
import s from 'styled-components';

import { IProps } from './types';

const CONFIG = {
  FONT_SIZE: 16,
  MARGIN: {
    TOP: 1,
    BOTTOM: 0.6,
  },
};

const fontSize = {
  h1: `${48 / CONFIG.FONT_SIZE}`,
  h2: `${38 / CONFIG.FONT_SIZE}`,
  h3: `${32 / CONFIG.FONT_SIZE}`,
  h4: `${26 / CONFIG.FONT_SIZE}`,
  h5: `${22 / CONFIG.FONT_SIZE}`,
  h6: `${18 / CONFIG.FONT_SIZE}`,
  subtitle: `${18 / CONFIG.FONT_SIZE}`,
  body: 1,
};

const fontWeight = {
  h1: 600,
  h2: 600,
  h3: 600,
  h4: 600,
  h5: 600,
  h6: 600,
  subtitle: 600,
  body: 400,
};

const Typography = s.div<any>`
  ${(props) => (props.mTop ? `margin-top: ${props.mTop}rem` : null)};
  ${(props) => (props.mBottom ? `margin-bottom: ${props.mBottom}rem` : null)};
  font-size: ${(props) => props.fSize}rem;
  font-weight: ${(props) => props.fWeight};
  text-align: ${(props) => props.align};
  color: ${(props) => props.fColor};
  ${(props) => props.noWrap}
`;

const Text: React.FC<IProps> = (props) => {
  const {
    variant = 'body',
    tag,
    marginTop,
    marginBottom,
    children,
    align,
    cutText,
    color = 'var(--font)',
  } = props;

  const as = tag ? tag : variant === 'subtitle' ? 'p' : variant === 'body' ? 'div' : variant;

  const mTop =
    variant === 'body'
      ? 0
      : marginTop || marginTop === 0
      ? marginTop / CONFIG.FONT_SIZE
      : (+fontSize[variant] * CONFIG.MARGIN.TOP).toFixed(1);

  const mBottom =
    variant === 'body'
      ? 0
      : marginBottom || marginBottom === 0
      ? marginBottom / CONFIG.FONT_SIZE
      : (+fontSize[variant] * CONFIG.MARGIN.BOTTOM).toFixed(1);

  const noWrap = cutText
    ? { 'text-overflow': 'ellipsis', 'white-space': 'nowrap', overflow: 'hidden' }
    : null;

  return (
    <Typography
      as={as}
      mTop={mTop}
      mBottom={mBottom}
      fSize={fontSize[variant]}
      fWeight={fontWeight[variant]}
      align={align}
      fColor={color}
      noWrap={noWrap}
    >
      {children}
    </Typography>
  );
};

export default Text;
