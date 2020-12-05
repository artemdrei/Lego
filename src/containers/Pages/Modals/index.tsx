import React, { useState } from 'react';

import Container from '@root/containers/Helpers/Container';
import Card from '@root/containers/Helpers/Card';

import Text from '@root/components/Typography';
import Modal from '@root/components/Modal';
import Button from '@root/components/Button';

const Checkboxes: React.FC = () => {
  const [generalModal, toggleGeneralModal] = useState(false);

  return (
    <>
      <Container>
        <Text tag="h1" variant="h2">
          Modals
        </Text>
        <Text tag="h1" variant="h5">
          General
        </Text>
        <Card>
          <Button label="Open General Modal" onClick={() => toggleGeneralModal(true)} />
        </Card>
      </Container>
      <Modal.Dialog opened={generalModal} onClose={() => toggleGeneralModal(false)}>
        <Modal.Header title="Modal Title" onClose={() => toggleGeneralModal(false)} />
        <Modal.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, iste!</Modal.Body>
        <Modal.Footer>
          <Button color="secondary" onClick={() => toggleGeneralModal(false)}>
            Close
          </Button>
          <Button>Apply</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
};

export default Checkboxes;
