import React, { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { withTheme } from '@material-ui/core/styles'
import FontAwesome from 'react-fontawesome'

const Link = styled.a`
  color: ${props => props.color};
  :visited {
    color: default;
  }
`

type Props = {
  iconName: string
  href?: string
  text?: string
  className?: string
  component?: ReactNode
  theme: any
}

const IconLink: FC<Props> = ({
  iconName,
  href,
  text,
  className,
  component,
  theme,
}) => (
  <Link
    href={href}
    className={className ? className : ''}
    target={href ? '_blank' : ''}
    color={theme.palette.primary.main}
  >
    <FontAwesome name={iconName} fixedWidth />: <span>{text}</span>
    {component}
  </Link>
)

export default withTheme(IconLink)
