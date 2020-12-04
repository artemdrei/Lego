export interface IProps {
  name?: string;
  value?: number | string;
  label?: string;
  'aria-label'?: string;
  checked?: boolean;
  disabled?: boolean;
  groupValue?: Record<undefined, undefined>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
