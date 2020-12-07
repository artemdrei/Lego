import React from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';
import Spinner from '@root/components/Loaders';

import Text from '@root/components/Typography';

const Loaders: React.FC = () => {
  return (
    <>
      <Container>
        <Text tag="h1" variant="h2">
          Loaders
        </Text>
        <Text tag="h1" variant="h5">
          Spinners
        </Text>
        <Card position={'relative'}>
          <Spinner color="var(--success)" opacity={0.8}>
            Loading...
          </Spinner>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga dolorum officiis numquam nobis
          unde, alias minima ipsa ratione rem esse perspiciatis? Repellat consequatur nisi velit neque illo.
          Odio, consequatur?
        </Card>
        <Card position={'relative'}>
          <Spinner color="var(--danger)" width={60} height={60} opacity={0.8} />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et impedit at quasi omnis quod eligendi,
          optio aut sunt, ratione officia quos fugiat deleniti dolor saepe? Magnam, illo laborum sequi dolore
          ex quam deleniti nulla harum pariatur recusandae iure adipisci impedit repellat omnis dolorem rem
          iusto dolorum minima natus? Accusantium tempore quos repellendus libero non voluptates saepe fugit
          iusto minima! Ducimus?
        </Card>
      </Container>
    </>
  );
};

export default Loaders;
