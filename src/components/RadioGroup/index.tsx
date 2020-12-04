import React from 'react';

import { IProps } from './types';

const RadioGroup: React.FC<IProps> = (props) => {
  if (!props.children) return null;

  const childrenWithProps = React.Children.map(props.children, (child) => {
    return React.cloneElement(child as React.ReactElement, {
      ...props,
    });
  });

  return <div>{childrenWithProps}</div>;
};

export default RadioGroup;
