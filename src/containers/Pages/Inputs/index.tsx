import React, { useState } from 'react';
import s from 'styled-components';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';
import Input from '@root/components/Input';

const WrapperStyled = s.div`
  input {
    margin-right: 16px;
  }
`;

const Checkboxes: React.FC = () => {
  const [value, changeValue] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <WrapperStyled>
      <Container>
        <Text tag="h1" variant="h2">
          Select
        </Text>
        <Text tag="h1" variant="h5">
          General
        </Text>
        <Card>
          <Input name="one" placeholder="Text" value={value['one'] || ''} onChange={handleChange} />
          <Input name="type" disabled value={value['type'] || 'Disabled'} onChange={handleChange} />
          <Input name="two" autoFocus value={value['two'] || ''} onChange={handleChange} />
        </Card>
      </Container>
    </WrapperStyled>
  );
};

export default Checkboxes;
