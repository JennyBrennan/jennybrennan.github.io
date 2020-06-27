import React from "react"
import Link from 'gatsby-link'
import get from 'lodash/get'
import Layout from "../components/layout"

class Index extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <article>
            <h1>Hello there!</h1>
            <p>Some copy.</p>
            <h2>Writing &amp; resources</h2>
            <ul>
              {posts.slice(0,3).map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <li>
                    <Link to={node.fields.slug}>{title}</Link> - <em>{node.frontmatter.date}</em>
                    <br/>{node.frontmatter.desc}
                  </li>
                )
              })}
            </ul>
            <Link to={'/blog'} className="homepage">Read more posts...</Link>
          </article>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            desc
          }
        }
      }
    }
  }
`
