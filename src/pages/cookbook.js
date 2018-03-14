import React from 'react';

import ExampleList from '../components/ExampleList';

const CookbookPage = ({ data: { allExample: {edges}} }) => (
  <ExampleList examples={edges} />
)

export const query = graphql`
  query ExampleList {
    allExample {
      edges {
        node {
          id
          childrenFile {
            name
            fields {
              content
            }
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

export default CookbookPage;
