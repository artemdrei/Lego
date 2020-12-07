import React, { useState } from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';
import AlertsManager from '@root/components/Alert';
import Button from '@root/components/Button';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

const Alerts: React.FC = () => {
  const [alerts, setAlerts] = useState([]);

  const data = [
    {
      title: 'Great Job!',
      body: 'This is a success message. This is a success message. This is a success message.',
      variant: 'success',
    },
    { title: 'Just so you know...', body: 'Lorem ipsum dolor sit.', variant: 'info' },
    { title: 'Oops.', body: 'This is a warning message.', variant: 'warning' },
    { title: 'Oh no!', body: 'This is an error message.', variant: 'error' },
  ];

  const showAlert = () => {
    const id = getRandomInt(data.length);
    setAlerts([data[id]]);
  };

  return (
    <>
      <Container>
        <Text tag="h1" variant="h2">
          Alerts
        </Text>
        <Text tag="h1" variant="h5">
          General
        </Text>
        <Card>
          <Button onClick={showAlert}>Show Alert</Button>
        </Card>
        <AlertsManager items={alerts} position="topRight" autoHideDelay={4000} />
      </Container>
    </>
  );
};

export default Alerts;
