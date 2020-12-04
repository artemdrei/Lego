import React from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';

const Buttons: React.FC = () => {
  return (
    <Container>
      <Text tag="h1" variant="h1">
        Headings
      </Text>
      <Card>
        <Text variant="h1">h1. Heading</Text>
        <Text variant="h2">h2. Heading</Text>
        <Text variant="h3">h3. Heading</Text>
        <Text variant="h4">h4. Heading</Text>
        <Text variant="h5">h5. Heading</Text>
        <Text variant="h6">h6. Heading</Text>
        <Text variant="subtitle">Subtitle</Text>
        <Text>Regular text</Text>
      </Card>

      <Text tag="h2" variant="h4">
        Typography with props
      </Text>
      <Card>
        <Text noWrap color="var(--font)">
          Cut text with "..." Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium minima
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
