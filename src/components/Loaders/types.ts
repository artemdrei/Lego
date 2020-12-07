export interface ISpinner {
  color?: string;
  width?: number;
  height?: number;
}

export interface ILoader extends ISpinner {
  opacity?: number; // between 0 and 1. Default is 1
}
