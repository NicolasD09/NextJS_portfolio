import css from './style.module.scss'
import SectionTitle from '@/components/SectionTitle';
import { Project } from './Project';
import { getAllProjects } from '@/api/projects';
import cn from 'classnames';

export const ProjectsSection = async () => {
  const projects = await getAllProjects()
  return (
    <div className={css.projectsSectionContainer}>
      <SectionTitle title={'Réalisations'}/>
      <div className={css.projectsWrapper}>
        <div className={cn(css.projectsList, 'layoutWrapper')}>
          {
            projects.map(project => {
              return <Project
                key={project.slug}
                project={project}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}
