import React, { useState } from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';
import Checkbox from '@root/components/Checkbox';

const Checkboxes: React.FC = () => {
  const [state, setState] = useState({
    one: true,
    two: false,
    tree: true,
    four: true,
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    setState({ ...state, [target.name]: target.checked });
  };

  return (
    <Container>
      <Text tag="h1" variant="h2">
        Checkboxes
      </Text>
      <Text tag="h1" variant="h5">
        Uncontrolled
      </Text>
      <Card>
        <Checkbox name="one" value="value 1" />
        <Checkbox name="two" value="value 2" disabled />
      </Card>

      <Text tag="h1" variant="h5">
        Controlled
      </Text>
      <Card>
        <Checkbox name="one" label="One" value="value 1" checked={state.one} onChange={onChange} />
        <Checkbox name="two" label="Two" value="value 2" checked={state.two} onChange={onChange} />

        <Checkbox
          name="tree"
          label="Tree"
          value="value 3"
          checked={state.tree}
          disabled
          onChange={onChange}
        />
      </Card>
    </Container>
  );
};

export default Checkboxes;
