'use client'

import css from './style.module.scss'
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Project } from './Project';
import { ProjectWithSkills } from '@/api/projects';
import useEmblaCarousel from 'embla-carousel-react'
import cn from 'classnames';

const ProjectsSection = ({ projects }: {projects: ProjectWithSkills[]}) => {
  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
      loop: true,
      align: 'center'
    }
  )

  return (
    <div className={css.projectsSectionContainer}>
      <SectionTitle title={'Réalisations'}/>
      <div className={css.projectsWrapper}>
        <div className={css.embla}>
          <div className={cn(css.emblaViewport)} ref={emblaRef}>
            <div className={css.emblaContainer}>
              {projects.map((project, index) => (
                <div className={css.emblaSlide} key={project.slug}>
                  <Project
                    index={index}
                    key={project.slug}
                    project={project}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection;
