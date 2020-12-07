import React from 'react';
import s, { keyframes } from 'styled-components';

import { ILoader, ISpinner } from './types';

const CONFIG = {
  WIDTH: 40,
  HEIGHT: 40,
  OPACITY: 0.8,
};

const fadeIn = keyframes`{
  0% {
    transform: rotate(0deg) }
  100% {
    transform: rotate(360deg) } 
  }`;

const Wrapper = s.div<Partial<ILoader>>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ opacity }) => `rgba(255,255,255, ${opacity})`}
`;

const Center = s.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--font);
`;

const Spinner = s.div<Partial<ISpinner>>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: 0 auto 12px;
  border-radius: 50%;
  border: ${({ color }) => `3px solid ${color}`};
  border-top-color: transparent;
  transform: rotate(360deg) infinite;
  animation: ${fadeIn} 700ms linear infinite;
  
`;

const { WIDTH, HEIGHT, OPACITY } = CONFIG;
const Loader: React.FC<ILoader> = (props) => {
  const { children, color = 'var(--accent)', width = WIDTH, height = HEIGHT, opacity = OPACITY } = props;
  const op = !opacity || opacity > 1 || opacity < 0 ? 1 : opacity;

  return (
    <Wrapper opacity={op}>
      <Center>
        <Spinner color={color} width={width} height={height} />
        {children}
      </Center>
    </Wrapper>
  );
};

export default Loader;
