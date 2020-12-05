import { ReactNode } from 'react';

export interface IProps {
  size?: 'lg' | 'md' | 'sm'; // default md
  children?: ReactNode;
  variant?: 'bordered' | 'clear';
  opened: boolean;
  onClose: () => void;
}
