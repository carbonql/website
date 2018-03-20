import _ from 'lodash';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-twilight.css';
import React from 'react';

import './layouts/terminal.css';

const Example = ({ files }) => {
  const sections = ['query', 'result', 'description'].reduce((acc, name) => {
    acc[name] = _.find(files, { name });
    return acc;
  }, {});

  // TODO: pick the language based off the file extension.
  const code = Prism.highlight(
    sections.query.fields.content,
    Prism.languages.typescript,
  );

  return (
    <div>
      <div className="row pt-4">
        <div
          className="col markdown"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: sections.description.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className="row">
        <div className="col-md col-lg-6 d-flex">
          <div className="card w-100">
            <div className="card-header">
              Query
            </div>
            <div className="card-body p-0 d-flex">
              <pre className="bg-dark m-0 p-3 w-100">
                <code
                  className="text-light"
                  // eslint-disable-next-line
                  dangerouslySetInnerHTML={{ __html: code }}
                />
              </pre>
            </div>
          </div>
        </div>
        <div className="col-md col-lg-6 d-flex">
          <div className="card w-100">
            <div className="card-header">
              Output
            </div>
            <div className="card-body p-0 d-flex">
              <pre className="bg-dark m-0 p-3 w-100">
                <code
                  className="text-light"
                  // eslint-disable-next-line
                  dangerouslySetInnerHTML={{
                    __html: sections.result.fields.content,
                  }}
                />
              </pre>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Example;
