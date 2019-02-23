import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withPrefix } from 'gatsby-link'

type Props = {
  description?: string
  lang?: string
  meta?: []
  keywords?: string[]
  title: string
}

export default ({
  description,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}: Props) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          >
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={withPrefix('/favicons/apple-touch-icon.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={withPrefix('/favicons/favicon-32x32.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href={withPrefix('/favicons/favicon-16x16.png')}
            />
          </Helmet>
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
