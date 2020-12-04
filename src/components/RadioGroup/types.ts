import { ReactNode } from 'react';

export interface IProps {
  name: string;
  groupValue: Record<undefined, undefined>;
  children: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
