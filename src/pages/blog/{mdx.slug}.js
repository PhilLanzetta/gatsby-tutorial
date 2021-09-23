import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function BlogPost({ data }) {
 const image = getImage(data.mdx.frontmatter.hero_image)

 return (
  <Layout pageTitle={data.mdx.frontmatter.title}>
   <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
   <p>Photo credit:{" "} <a href={data.mdx.frontmatter.hero_image_credit_link}>{data.mdx.frontmatter.hero_image_credit_text}</a></p>
   <p>{data.mdx.frontmatter.date}</p>
   <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </Layout>
 )
}

export const query = graphql`
 query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
         childImageSharp {
          gatsbyImageData
         }
        }
      }
      body
    }
   }`

export default BlogPost
