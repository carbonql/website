import React from 'react';

import ExampleList from '../ExampleList';

const CookbookPage = ({ data: { allExample, allMarkdownRemark} }) => (
  <ExampleList examples={allExample.edges} headings={allMarkdownRemark.edges} />
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
              frontmatter {
                tags
              }
              html
            }
          }
        }
      }
    }
    allMarkdownRemark(filter:{frontmatter:{tags:{in:["heading"]}}}) {
      edges {
        node {
          id
          frontmatter {
            tags
          }
          html
        }
      }
    }
  }
`

export default CookbookPage;
