export type IProps = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle';
  fontWeight?: '400' | '600' | '700';
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  marginTop?: number; //px
  marginBottom?: number; //px
  cutText?: boolean;
  color?: string;
  // classes?: Record<string, unknown>; TODO
};
