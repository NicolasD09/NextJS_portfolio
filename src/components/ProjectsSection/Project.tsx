import css from './style.module.scss'
import { ProjectWithSkills } from '@/api/projects';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import { Route } from '@/lib/router';
import { SeeMore } from '@/components/UI/Button';
import cn from 'classnames';

type ProjectProps = {
  project: ProjectWithSkills
}

const COLORS = [
  css.orange,
  css.purple,
  css.gray,
  css.yellow,
  css.coral
]

let colors = [
  css.orange,
  css.purple,
  css.gray,
  css.yellow,
  css.coral
]

const getColor = () => {
  if(colors.length === 0) colors = COLORS;
  const color = colors[0];
  colors.shift();
  return color;
}
const SkillsList = ({ skills }: {skills: ProjectWithSkills['skills']}) => {
  return(
    <div className={cn('flex gap-0.5 flex-wrap justify-center', css.skillsList, getColor())}>
      <>{
        skills.map((s, i) => <>
          <span>{s.title}</span>
          {i !== skills.length - 1 &&
          <span className={'font-[500]'}>/</span>
          }
        </>)
      }</>
    </div>
  )
}
export const Project = ({ project }: ProjectProps) => {
  return (
    <div className={css.project}>
      <div className={css.projectHeader}>
        <div className={css.projectHeaderTitle}>{project.title}</div>
        <SkillsList skills={project.skills} />
      </div>
      <div>{renderElement(project.excerpt)}</div>
      <SeeMore label={'Voir le projet'} to={Route.ABOUT_PAGE}/>
    </div>
  )
}
