import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

function BlogPage({ data }) {
 return (
  <Layout pageTitle="My Blog Posts">
   <ul>
    {data.allFile.nodes.map(node => {
     return (
      <li key={node.name}>{node.name}</li>
     )
    })}
   </ul>
  </Layout>
 )
}

export const query = graphql`
  {
    allFile {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
