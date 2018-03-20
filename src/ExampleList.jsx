import _ from 'lodash';
import React from 'react';
import tocbot from 'tocbot';
import 'tocbot/src/scss/tocbot.scss';

import './layouts/toc.scss';

import Example from './Example';

const tagsInclude = tag => example =>
  example.node.childrenFile
    .filter(file => _.get(
      file,
      'file.childMarkdownRemark.frontmatter.tags',
      [],
    ).includes(tag).length > 0);

const makeNode = example => (
  <Example key={example.node.id} files={example.node.childrenFile} />
);

const Section = ({ html, examples }) => (
  <div className="pt-4">
    <div
      className="row"
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
    <hr />
    <div className="row">
      {_.map(examples, makeNode)}
    </div>
  </div>
)

class ExampleList extends React.Component {
  componentDidMount() {
    tocbot.init({
      tocSelector: '.tocbot-sidebar',
      contentSelector: '.tocbot-content',
    });
  }

  componentDidUpdate() {
    tocbot.refresh();
  }

  filterExamples = (tags) => this.props.examples.filter(
    tagsInclude(_.first(_.without(tags, 'heading'))));

  render() {
    const { examples, headings } = this.props;

    const content = headings.map(edge => (
      <Section
        key={edge.node.id}
        html={edge.node.html}
        examples={this.filterExamples(edge.node.frontmatter.tags)}
      />
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-2 tocbot-sidebar" />
          <div className="col-10 tocbot-content">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default ExampleList;
