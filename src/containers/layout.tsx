import React, { FC } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

import Header from '../components/header'
import Background from '../components/background'

const mobileWidth = '700px'

const Container = styled.div`
  margin: 20px auto;
  max-width: 480px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  @media (min-width: ${mobileWidth}) {
    max-width: 960px;
  }
`

const Layout: FC = ({ children }) => (
  <div>
    <Global
      styles={css`
        h1 {
          margin: 0 0 5px 0;
        }
        h2 {
          margin: 5px 0;
        }
        a {
          text-decoration: none;
        }
        p,
        li {
          color: #444;
        }
      `}
    />
    <StaticQuery
      query={layoutQuery}
      render={data => (
        <Background>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Container>{children}</Container>
        </Background>
      )}
    />
  </div>
)

export default Layout

const layoutQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
