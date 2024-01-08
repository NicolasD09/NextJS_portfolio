import css from './style.module.scss'
import SectionTitle from '@/components/SectionTitle';
import { Project } from './Project';

export const ProjectsSection = () => {
  return (
    <div className={css.projectsSectionContainer}>
      <SectionTitle title={'Réalisations'} />
      <div className={css.projectsWrapper}>
        <div className={css.projectsList}>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  )
}
