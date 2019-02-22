import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-scroll'

type Props = {
  href: string
  text: string
}

const ScrollButton: FC<Props> = ({ text, href }) => (
  <Button key={href} color="primary" aria-label={`scroll to ${text}`}>
    <Link
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      duration={500}
    >
      {text}
    </Link>
  </Button>
)

export default ScrollButton
