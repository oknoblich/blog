import React from "react"
import { graphql, Link } from "gatsby"
// import dayjs from "dayjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import 'dayjs/locale/de'
// dayjs.locale('de')

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div className="row g-2">
      <div className="col-12">
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug} key={node.id} className="blog-link">
              {/* <time>
                {dayjs(node.frontmatter.date).format('dd')}
              </time>
              <time>
                {dayjs(node.frontmatter.date).format('DD.MM.')}
              </time> */}
              <p>
                {node.frontmatter.title}
              </p>
            </Link>
          ))
        }
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
