import { ReactNode } from 'react';

export type TPosition = 'topRight' | 'topCenter';
export type TVariant = 'success' | 'error' | 'info' | 'warning';

export interface IAlert {
  variant: TVariant;
  title?: string;
  body?: string;
  children?: ReactNode;
  position?: TPosition;
  autoHideDelay?: number; //ms
  _id: string;
  _remove: (id: string) => void;
}

export interface IAlertStyled extends IAlert {
  closed?: boolean;
}

export interface IProps {
  items: IAlert[];
  autoHideDelay?: number; //ms
  position?: TPosition;
}
