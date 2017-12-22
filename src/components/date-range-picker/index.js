import React from 'react';
import ComponentExample from '../ComponentExample';
import { DateRangePicker } from '../../rsuiteSource';

const context = require('./index.md');
const examples = [
  require('./basic.md')
];

export default () => {
  return (
    <ComponentExample
      context={context}
      examples={examples}
      dependencies={{
        DateRangePicker
      }}
    />
  );
};
