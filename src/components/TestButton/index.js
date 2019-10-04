import React from 'react';
import { Button } from 'semantic-ui-react';

const TestButton = () => (
  <div>
    <Button
      basic
      color='blue'
      content='Fork'
      icon='fork'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: '2,048',
      }}
    />
  </div>
);

export default TestButton;
