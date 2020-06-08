import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'

const Index = ({ data }) => (
  <Layout>
    <main>
      <Helmet title={config.siteTitle} />
      <h1>Exposing corporation colision on the democratic process and world politics</h1>
      <h2>
        Filter by <a href="/topics">political issues</a> or the company <a href="/categories">areas</a>  
      </h2>
      <SEO />
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
)

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            date
            categories
          }
        }
      }
    }
  }
`
