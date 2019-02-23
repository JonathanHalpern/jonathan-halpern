import React, { FC } from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import Content from './content'
import Title from './title'
import Navigation from '../containers/navigation'

const StyledImg = styled(Img)`
  width: 160px;
  border-radius: 50%;
  margin: 0px auto 15px;
`

export type Bio = {
  frontmatter: {
    title: string
    name: string
  }
  html: string
}

type Props = {
  data: Bio
  image: {
    childImageSharp: GatsbyImageProps
  }
}
const Bio: FC<Props> = ({ data, image }) => (
  <div>
    <Title text={data.frontmatter.name} />
    <StyledImg fluid={image.childImageSharp.fluid} />
    <Divider />
    <p>{data.frontmatter.title}</p>
    <Content content={data.html} />
    <Navigation />
  </div>
)

export default Bio
