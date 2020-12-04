import React, { useState } from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';
import Radio from '@root/components/Radio';
import RadioGroup from '@root/components/RadioGroup';

const RadioButtons: React.FC = () => {
  const [radioValue, setRadio] = useState('1');

  const onOneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setRadio(target.value);
  };

  const [groupValue, setGroupValue] = useState('3');
  const onGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setGroupValue(target.value);
  };

  return (
    <Container>
      <Text tag="h1" variant="h2">
        Radio Buttons
      </Text>
      <Text tag="h1" variant="h5">
        Standalone radio buttons
      </Text>
      <Card>
        <Radio name="1" label="First" value="1" checked={radioValue === '1'} onChange={onOneChange} />
        <Radio name="2" label="Second" value="2" checked={radioValue === '2'} onChange={onOneChange} />
        <Radio name="3" label="Third" value="3" checked={radioValue === '3'} onChange={onOneChange} />
        <Radio
          name="4"
          label="Fourth"
          value="4"
          checked={radioValue === '4'}
          disabled
          onChange={onOneChange}
        />
      </Card>

      <Text tag="h1" variant="h5">
        Grouped radio buttons
      </Text>
      <Card>
        <RadioGroup name="radioGroup" groupValue={groupValue} onChange={onGroupChange}>
          <Radio label="First" value="1" />
          <Radio label="Second" value="2" />
          <Radio label="Third" value="3" />
          <Radio label="Fourth" value="4" />
        </RadioGroup>
      </Card>
    </Container>
  );
};

export default RadioButtons;
