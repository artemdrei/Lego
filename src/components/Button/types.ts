export type TSize = 'small' | 'medium' | 'big';
export type TColor = 'primary' | 'secondary' | 'danger';
export type TVariant = 'regular' | 'link' | 'outline' | 'icon';
export type TTarget = '_blank' | '_self' | '_parent' | '_top';

export type IProps = {
  size?: TSize;
  color?: TColor;
  variant?: TVariant;
  href?: string;
  target?: TTarget;
  label?: string;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  'aria-label'?: string;
  onClick?: () => void;
  onMouseUp?: () => void;
  onMouseDown?: () => void;
};
