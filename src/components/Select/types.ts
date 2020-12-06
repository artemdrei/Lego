type TOption = {
  label: string;
  value: string;
};

export interface IProps {
  data: TOption[];
  name: string;
  ariaLabel?: string;
  value?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
