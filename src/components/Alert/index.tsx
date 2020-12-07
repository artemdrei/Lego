import React, { useEffect, useState } from 'react';
import s from 'styled-components';

import { IProps, IAlert, TPosition } from './types';

import { getRandomId } from '@root/utils';
import { Z_INDEX } from '@root/constants/zIndexes';

import Alert from './Item';

const CONFIG = {
  POSITION: 'topRight' as TPosition,
  DELAY: 12000,
};

const Wrapper = s.div<Partial<IProps>>`
  z-index: ${Z_INDEX.ALERT};
  position: absolute;
  ${({ position }) => {
    switch (position) {
      case 'topRight':
        return `top: 10px; right: 10px;`;
      case 'topCenter':
        return `top: 10px; left: 50%; transform: translateX(-50%)`;
    }
  }}`;

const { POSITION, DELAY } = CONFIG;
const Alerts: React.FC<IProps> = (props) => {
  const { items, position = POSITION, autoHideDelay = DELAY } = props;

  const [alerts, setAlerts] = useState<IAlert[]>([]);

  useEffect(() => {
    const alertsWithIds = items.map((item) => {
      if (item._id) {
        return item;
      } else {
        const _id = getRandomId();
        return { ...item, _id };
      }
    });

    setAlerts((prev) => [...prev, ...alertsWithIds]);
  }, [props.items]);

  const _remove = (_id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert._id !== _id));
  };

  if (alerts.length === 0) return null;

  return (
    <Wrapper position={position}>
      {alerts.map(({ _id, title, body, variant, children }) => {
        return (
          <Alert
            _id={_id}
            _remove={_remove}
            key={_id}
            title={title}
            body={body}
            variant={variant}
            position={position}
            autoHideDelay={autoHideDelay}
          >
            {children}
          </Alert>
        );
      })}
    </Wrapper>
  );
};

export default Alerts;
