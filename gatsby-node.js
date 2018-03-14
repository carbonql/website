/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash');

exports.onCreateNode = async (
    { node, getNode, loadNodeContent, boundActionCreators }) => {
  if (node.sourceInstanceName !== 'examples') return

  if (!_.includes(['description', 'result', 'query'], node.name)) return

  const {
    createNode,
    createNodeField,
    createParentChildLink } = boundActionCreators;

  let exampleNode = getNode(node.relativeDirectory);

  if (!exampleNode) {
    exampleNode = {
      id: node.relativeDirectory,
      parent: null,
      children: [],
      internal: {
        type: 'Example',
        contentDigest: 'asdf'
      }
    };

    createNode(exampleNode);
  }

  createParentChildLink({parent: exampleNode, child: node});

  createNodeField({
    node,
    name: 'content',
    value: await loadNodeContent(node),
  });
};
