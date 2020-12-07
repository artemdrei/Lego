import React, { useState } from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';
import Select from '@root/components/Select';

const Checkboxes: React.FC = () => {
  const [lang, toggleLang] = useState('fr');

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Russian', value: 'ru' },
    { label: 'Ukrainian', value: 'urk' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    toggleLang(e.target.value);
  };

  return (
    <>
      <Container>
        <Text tag="h1" variant="h2">
          Select
        </Text>
        <Text tag="h1" variant="h5">
          General
        </Text>
        <Card>
          <Select
            name="languages"
            value={lang}
            data={languages}
            ariaLabel="Select language"
            onChange={handleChange}
          />
          <Select
            disabled
            data={languages}
            name="languages"
            value={'en'}
            ariaLabel="Select language"
            onChange={() => {}}
          />
        </Card>
      </Container>
    </>
  );
};

export default Checkboxes;
