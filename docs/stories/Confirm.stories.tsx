import { keyframes } from '@emotion/react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { jsx } from '@theme-ui/core';
import { useState } from 'react';
import { Box, Heading, Button, Dialog, Paragraph, BoxProps } from '../../lib';
interface ConfirmProps extends BoxProps {
  onConfirm: () => void;
  onCancel: () => void;
}
const animation = keyframes`
  from {
    opacity: 0;
    transform: translateY(calc(-100% / 2));
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Confirm = ({ onConfirm, onCancel, ...rest }: ConfirmProps) => {
  return (
    <Box
      sx={{
        animation: `${animation} 0.3s ease-out`,
        backgroundColor: 'text_base',
        width: '350px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: '8px'
      }}
      {...rest}
    >
      <Heading level={3} sx={{ color: 'text_negative' }}>
        Are you sure?
      </Heading>
      <Paragraph sx={{ color: 'text_opposite_subdued' }}>
        This action cannot be undone.
      </Paragraph>
      <Box
        sx={{
          display: 'flex',
          marginTop: '30px',
          justifyContent: 'space-between'
        }}
      >
        <Button
          onClick={onCancel}
          size="large"
          zoomable
          uppercase
          variant="text"
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          size="large"
          zoomable
          uppercase
          variant="contained"
          color="success"
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default {
  title: 'Dialog/Confirm',
  component: Confirm
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = args => {
  const [value, setValue] = useState('no value');
  return (
    <Box>
      <Dialog
        render={({ close }) => (
          <Confirm
            onConfirm={() => {
              setValue('confirmed');
              close();
            }}
            onCancel={() => {
              setValue('canceled');
              close();
            }}
          />
        )}
      >
        <Button size="medium" uppercase zoomable>
          Open question
        </Button>
      </Dialog>
      {value}
    </Box>
  );
};

export const Basic = Template.bind({});

Basic.args = {};
