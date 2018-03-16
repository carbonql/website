import _ from 'lodash';
import React from 'react';

import Example from '../Example';

const tagsInclude = tag =>
  example => {
    return example.node.childrenFile
      .filter(file =>
        file.childMarkdownRemark &&
        file.childMarkdownRemark.frontmatter &&
        file.childMarkdownRemark.frontmatter.tags &&
        file.childMarkdownRemark.frontmatter.tags.includes(tag))
      .length > 0;
  }

const makeNode = example => (
  <Example key={example.node.id} files={example.node.childrenFile} />
);

const ExampleList = ({ examples }) => {
  examples.sort(example => example.node.id);

  const ops = examples.filter(tagsInclude("ops"));
  const governance = examples.filter(tagsInclude("governance"));
  const dev = examples.filter(tagsInclude("dev"));

  return (
    <div>
      <div className="pt-4">
        <h1>Ops</h1>
        <p>
          Operators need quick primitives that will help them get visibility into
          what is happening in their Kubernetes clusters, especially during a
          livesite incident.

          This section contains a collection of useful tools that operators can
          use day-to-day in their jobs to help diagnose such things.
        </p>
        <hr/>
        {_.map(ops, makeNode)}
      </div>

      <div className="pt-4">
        <h1>Governance</h1>
        <p>
          CIOs and engineering leadership need the ability to quickly understand
          how their organization is tracking against important metrics like
          compliance, security patches, and so on.

          This section contains a collection of useful tools that governance
          teams can use to understand and enforce policy decisions on an
          organizational basis.
        </p>
        <hr/>
        {_.map(governance, makeNode)}
      </div>

      <div className="pt-4">
        <h1>Application Developemnt</h1>
        {_.map(dev, makeNode)}
      </div>
    </div>
  );
};

export default ExampleList;
