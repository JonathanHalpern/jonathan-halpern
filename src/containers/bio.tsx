import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Bio from '../components/bio'

export default () => (
  <div>
    <StaticQuery
      query={projectsQuery}
      render={data => (
        <Bio data={data.markdownRemark} image={data.placeholderImage} />
      )}
    />
  </div>
)

const projectsQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "personalDetails" } }) {
      html
      frontmatter {
        templateKey
        name
        title
        dateOfBirth
        email
        nationality
        gender
      }
    }
    placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
