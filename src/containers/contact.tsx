import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Contact from '../components/contact'
import Title from '../components/title'

export default () => (
  <div id="contact">
    <Title text="Contact" />
    <StaticQuery
      query={contactsQuery}
      render={data => <Contact data={data.markdownRemark} />}
    />
  </div>
)

const contactsQuery = graphql`
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
        linkedIn
      }
    }
  }
`
