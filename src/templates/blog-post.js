import React from "react"
import { graphql, Link } from "gatsby"
// import dayjs from "dayjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SubPage = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <Link to="/" style={{ position: 'absolute', top: '-38px', left: 0, width: '100%', fontSize: 12, textAlign: 'center' }}>
      <span style={{ position: 'relative', top: '2px', fontSize: 16 }}>←</span> zurück zur Übersicht
    </Link>
    {/* <span style={{ position: 'absolute', top: -33, right: 0, fontSize: 12 }}>
      {dayjs(data.markdownRemark.frontmatter.date).format('DD.MM.YYYY')}
    </span> */}
    <div className="row">
      <div className="col-12">
        <h1>
          {data.markdownRemark.frontmatter.title}
        </h1>
      </div>
      <div className="col-12">
        <article dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </div>
  </Layout>
)

export default SubPage

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
