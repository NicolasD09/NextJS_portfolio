'use client'

import css from './style.module.scss'
import { ProjectWithSkills } from '@/api/projects';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import { getRouteForProject } from '@/lib/router';
import cn from 'classnames';
import SeeMoreButton from '@/components/UI/Button/SeeMoreButton';

type ProjectProps = {
  project: ProjectWithSkills;
  index: number;
}

let colors = [
  css.orange,
  css.purple,
  css.gray,
  css.yellow,
  css.coral
]

const getColor = (index: number) => colors[index]

type SkillsListProps = {
  skills: ProjectWithSkills['skills'];
  index: number
}
const SkillsList = ({ skills, index }: SkillsListProps) => {
  return(
    <div className={cn('flex gap-0.5 flex-wrap justify-center', css.skillsList, getColor(index))}>
      <>{
        skills.map((s, i) => <span key={'skillSpan_'+s.slug}>
          <span>{s.title}</span>
          {i !== skills.length - 1 &&
          <span className={'font-medium'}>/</span>
          }
        </span>)
      }</>
    </div>
  )
}
export const Project = ({ project, index }: ProjectProps) => {
  return (
    <div className={css.project}>
      <div className={css.projectContent}>
        <div className={css.projectHeader}>
          <div className={css.projectHeaderTitle}>{project.title}</div>
          <SkillsList skills={project.skills} index={index} />
        </div>
        <div>{renderElement(project.excerpt)}</div>
      </div>
      <SeeMoreButton label={'Voir le projet'} to={getRouteForProject(project)}/>
    </div>
  )
}
