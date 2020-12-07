import { keyframes } from 'styled-components';

const fadeIn = keyframes`{
  0% {
    transform: scale(0.9);
    opacity: 0; }
  100% {
    transform: scale(1);
    opacity: 1; } 
  }`;

const fadeOut = keyframes`{
  0% {
    transform: scale(1);
    opacity: 1; }
  100% {
    transform: scale(1);
    opacity: 0; } 
  }`;

export const animations = {
  fadeIn,
  fadeOut,
  inDuration: '160',
  outDuration: '160',
};
