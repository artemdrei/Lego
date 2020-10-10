import React from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';

const Buttons: React.FC = () => {
  return (
    <Container>
      <Text variant="h4" tag="h2" color="var(--font-accent)">
        Heading
      </Text>
      <Card>
        <Text variant="h1" color="var(--font-accent)">
          h1. Heading
        </Text>
        <Text variant="h2" color="var(--font-accent)">
          h2. Heading
        </Text>
        <Text variant="h3" color="var(--font-accent)">
          h3. Heading
        </Text>
        <Text variant="h4" color="var(--font-accent)">
          h4. Heading
        </Text>
        <Text variant="h5" color="var(--font-accent)">
          h5. Heading
        </Text>
        <Text variant="h6" color="var(--font-accent)">
          h6. Heading
        </Text>
        <Text variant="subtitle" color="var(--font-accent)">
          Subtitle
        </Text>
        <Text color="var(--font)">Body</Text>
      </Card>

      <Text variant="h4" tag="h2" color="var(--font-accent)">
        Typography with props
      </Text>
      <Card>
        <Text noWrap color="var(--font)">
          Cut text with "..."Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium minima
          facere cumque quas voluptatum est totam ipsum unde! Recusandae magnam laboriosam dolor pariatur esse
          totam illum veritatis tenetur est nesciunt!
        </Text>
        <Text color="var(--font-weak)">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, veniam inventore iure dolore iusto
          ipsum dolorem temporibus, quo magnam sunt cumque assumenda, quod in blanditiis! Assumenda optio
          sapiente velit natus.
        </Text>
      </Card>
    </Container>
  );
};

export default Buttons;
