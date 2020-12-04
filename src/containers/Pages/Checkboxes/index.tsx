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
      <Text tag="h1" variant="h1">
        Checkboxes
      </Text>
      <Text tag="h1" variant="h5">
        Uncontrolled
      </Text>
      <Card>
        <Checkbox name="one" value="value 1" />
        <Checkbox name="two" value="value 2" />
        <Checkbox name="tree" value="value 3" />
        <Checkbox name="four" value="value 4" disabled />
      </Card>

      <Text tag="h1" variant="h5">
        Controlled
      </Text>
      <Card>
        <Checkbox name="one" label="Second" value="value 1" checked={state.one} onChange={onChange} />
        <Checkbox name="two" label="Third" value="value 2" checked={state.two} onChange={onChange} />
        <Checkbox
          name="tree"
          label="First"
          value="value 3"
          disabled
          checked={state.tree}
          onChange={onChange}
        />
        <Checkbox
          name="four"
          label="Fourth"
          value="value 4"
          checked={state.four}
          disabled
          onChange={onChange}
        />
      </Card>
    </Container>
  );
};

export default Checkboxes;
