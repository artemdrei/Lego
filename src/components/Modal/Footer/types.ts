import { ReactNode } from 'react';

export interface IProps {
  justify?: 'space-around' | 'space-between' | 'flex-start' | 'flex-end'; // flex-end by default
  children?: ReactNode;
}
