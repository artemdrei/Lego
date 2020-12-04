import React from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';
import Button from '@root/components/Button';

import TrashIcon from '@root/assets/svg/trash.svg';
import Text from '@root/components/Typography';

const Buttons: React.FC = () => {
  return (
    <Container>
      <Text tag="h1" variant="h1">
        Buttons
      </Text>
      <Text tag="h2" variant="h5">
        Contained Buttons
      </Text>
      <Card>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
      </Card>
      <Text tag="h2" variant="h5">
        Outlined Buttons
      </Text>
      <Card>
        <Button color="primary" variant="outline" label="Outline Primary" />
        <Button color="secondary" variant="outline" label="Outline Secondary" />
        <Button color="danger" variant="outline" label="Outline Danger" />
      </Card>
      <Text tag="h2" variant="h5">
        Link like Buttons
      </Text>
      <Card>
        <Button color="primary" variant="link" label="Link View Primary" />
        <Button color="secondary" variant="link" label="Link View Secondary" />
        <Button color="danger" variant="link" label="Link View Danger" />
      </Card>
      <Text tag="h2" variant="h5">
        Links
      </Text>
      <Card>
        <Button
          href="https://www.wikipedia.org/"
          variant="link"
          color="primary"
          label="Link Primary"
          target="_blank"
        />
        <Button
          href="https://www.wikipedia.org/"
          variant="link"
          color="secondary"
          label="Link Secondary"
          target="_blank"
        />
        <Button
          href="https://www.wikipedia.org/"
          variant="link"
          color="danger"
          label="Link Outline"
          target="_blank"
        />
      </Card>
      <Text tag="h2" variant="h5">
        Buttons with Icon
      </Text>
      <Card>
        <Button color="primary" label="Outline Primary">
          <TrashIcon />
        </Button>
        <Button color="secondary" label="Outline Secondary">
          <TrashIcon />
        </Button>
        <Button color="danger" label="Outline Danger">
          <TrashIcon />
        </Button>
      </Card>
      <Text tag="h2" variant="h5">
        Icon Buttons
      </Text>
      <Card>
        <Button color="primary" variant="icon" size="small" aria-label="delete">
          <TrashIcon />
        </Button>
        <Button color="secondary" variant="icon" aria-label="delete">
          <TrashIcon />
        </Button>
        <Button color="danger" variant="icon" size="big" aria-label="delete">
          <TrashIcon />
        </Button>
      </Card>
      <Text tag="h2" variant="h5">
        Disabled Buttons
      </Text>
      <Card>
        <Button color="primary" disabled label="Primary" />
        <Button color="danger" disabled variant="outline" label="Outline Secondary" />
        <Button color="danger" disabled variant="link" label="Link View Danger" />
        <Button
          disabled
          href="https://www.wikipedia.org/"
          variant="link"
          color="danger"
          label="Link Outline"
        />
      </Card>
      <Text tag="h2" variant="h5">
        Sizes
      </Text>
      <Card>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="big">Big</Button>
      </Card>
    </Container>
  );
};

export default Buttons;
