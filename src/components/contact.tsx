import React, { FC } from 'react'
import Moment from 'react-moment'
import styled from '@emotion/styled'

import IconLink from './iconLink'

const StyledIconLink = styled(IconLink)`
  display: block;
  margin-bottom: 5px;
`

export type ContactProps = {
  frontmatter: {
    email: string
    mobile: string
    address: string
    dateOfBirth: string
    linkedIn: string
  }
}

type Props = {
  data: ContactProps
}

const Contact: FC<Props> = ({ data }) => (
  <div>
    <StyledIconLink
      href={`mailto:${data.frontmatter.email}`}
      iconName="envelope"
      text={data.frontmatter.email}
    />
    <StyledIconLink iconName="phone" text={data.frontmatter.mobile} />
    <StyledIconLink iconName="home" text={data.frontmatter.address} />
    <StyledIconLink
      href={data.frontmatter.linkedIn}
      iconName="linkedin"
      text={data.frontmatter.linkedIn}
    />
    <StyledIconLink
      component={
        <Moment format="DD/MM/YYYY">{data.frontmatter.dateOfBirth}</Moment>
      }
      iconName="birthday-cake"
    />
  </div>
)

export default Contact
