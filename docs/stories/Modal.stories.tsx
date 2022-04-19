import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { useState } from 'react';
import {
  Modal,
  Box,
  ModalHeading,
  ModalBody,
  ModalFooter,
  Heading,
  Tooltip,
  Button
} from '../../lib';

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <Button onClick={() => setIsOpen(true)} size="medium" uppercase zoomable>
        Open modal
      </Button>
      <Modal size="medium" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeading>
          <Heading level={1}>Modal Heading</Heading>
        </ModalHeading>
        <ModalBody>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            fugit, a alias beatae obcaecati sit vitae eligendi magni, esse modi
            iusto? Vitae praesentium aut repudiandae sequi maxime consectetur
            rerum dolores. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Est voluptates ab officiis dignissimos repudiandae ducimus,
            facere natus fugiat? Animi mollitia excepturi beatae rerum suscipit
            quisquam et, molestias delectus tenetur doloribus.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setIsOpen(false)}
            color="success"
            variant="outlined"
            uppercase
            sx={{ marginLeft: 'auto' }}
          >
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {};
