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

const Text: React.FC<IProps> = (props) => {
  const {
    variant = 'body',
    tag,
    marginTop,
    marginBottom,
    children,
    align,
    cutText,
    color = 'var(--font-accent)',
  } = props;
  const dynamicTag = tag ? tag : variant === 'subtitle' || variant === 'body' ? 'p' : variant;
  const noWrap = cutText
    ? { 'text-overflow': 'ellipsis', 'white-space': 'nowrap', overflow: 'hidden' }
    : null;
  const mTop =
    marginTop || marginTop === 0
      ? marginTop / CONFIG.FONT_SIZE
      : (+fontSize[variant] * CONFIG.MARGIN.TOP).toFixed(1);
  const mBottom =
    marginBottom || marginBottom === 0
      ? marginBottom / CONFIG.FONT_SIZE
      : (+fontSize[variant] * CONFIG.MARGIN.BOTTOM).toFixed(1);

  const Styled = s(dynamicTag)`
    margin-top: ${mTop}rem;
    margin-bottom: ${mBottom}rem;
    font-size: ${fontSize[variant]}rem;
    font-weight: ${fontWeight[variant]};
    text-align: ${align};
    color: ${color};
    ${noWrap}
`;

  return <Styled>{children}</Styled>;
};

export default Text;
