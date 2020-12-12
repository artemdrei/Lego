import { FocusEvent, ChangeEvent, KeyboardEvent } from 'react';

type TType =
  | 'number'
  | 'text'
  | 'password'
  | 'range'
  | 'tel'
  | 'date'
  | 'color'
  | 'email'
  | 'submit'
  | 'time';

export interface IProps {
  name?: string;
  value: string | number;
  id?: string;
  type?: TType; // default text
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: boolean;
  fullWidth?: boolean;
  inputRef?: (ref: HTMLInputElement) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}
