import _ from 'lodash';
import React from 'react';

import Example from '../Example';

const ExampleList = ({ examples }) => {
  const elements = _.map(examples, example => (
    <Example key={example.node.id} files={example.node.childrenFile} />
  ));

  return (
    <div>
      {elements}
    </div>
  );
};

export default ExampleList;
