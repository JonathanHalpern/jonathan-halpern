import React, { FC } from 'react'
import Content from './content'
import Chip from '@material-ui/core/Chip'
import DateRange from './dateRange'
import styled from '@emotion/styled'

type SkillChipProps = {
  key: string
  label: string
}

export type ProjectType = {
  frontmatter: {
    title: string
    institution: string
    startDate: string
    endDate: string
    skills: string[]
  }
  html: string
  id: string
}

type Props = {
  data: ProjectType
}

const SkillChip = styled(Chip)<SkillChipProps>`
  margin: 5px;
`

const Project: FC<Props> = ({ data }) => (
  <div>
    <h2>
      {data.frontmatter.institution} - {data.frontmatter.title}
    </h2>
    <DateRange
      startDate={data.frontmatter.startDate}
      endDate={data.frontmatter.endDate}
      dateFormat="MMM YYYY"
    />
    {data.frontmatter.skills &&
      data.frontmatter.skills
        .sort((a, b) => (a > b ? 1 : -1))
        .map((skill: string) => (
          <SkillChip key={skill} label={skill} color="primary" />
        ))}
    <Content content={data.html} />
  </div>
)

export default Project
