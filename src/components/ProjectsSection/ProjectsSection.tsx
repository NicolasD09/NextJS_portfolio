import css from './style.module.scss'
import SectionTitle from '@/components/SectionTitle';
import { Project } from './Project';
import { getAllProjects } from '@/api/projects';
import cn from 'classnames';

export const ProjectsSection = async () => {
  const project = (await getAllProjects())[0]
  return (
    <div className={css.projectsSectionContainer}>
      <SectionTitle title={'Réalisations'}/>
      <div className={css.projectsWrapper}>
        <div className={cn(css.projectsList, 'layoutWrapper')}>
          <Project key={project.slug + Math.random() * 12343} project={project}/>
          <Project key={project.slug + Math.random() * 12343} project={project}/>
          <Project key={project.slug + Math.random() * 12343} project={project}/>
          <Project key={project.slug + Math.random() * 12343} project={project}/>
          <Project key={project.slug + Math.random() * 12343} project={project}/>
        </div>
      </div>
    </div>
  )
}
