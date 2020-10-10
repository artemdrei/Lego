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
  h1: 700,
  h2: 700,
  h3: 700,
  h4: 700,
  h5: 700,
  h6: 700,
  subtitle: 600,
  body: 400,
};

const Text: React.FC<IProps> = (props) => {
  const { variant = 'body', tag, marginTop, marginBottom, children, align, noWrap, color } = props;
  const dynamicTag = tag ? tag : variant === 'subtitle' || variant === 'body' ? 'p' : variant;
  const cutText = noWrap ? { 'text-overflow': 'ellipsis', 'white-space': 'nowrap', overflow: 'hidden' } : {};
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
    ${cutText}
`;

  return <Styled>{children}</Styled>;
};

export default Text;
