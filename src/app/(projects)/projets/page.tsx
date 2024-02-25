import { getAllProjects } from '@/api/projects';
import css from './style.module.scss'
import { Project } from '@/components/ProjectsSection/Project';
import PageWrapper from '@/components/Page/Page';

export default async function Page(){
  const projects = await getAllProjects();

  return (
    <PageWrapper>
      <div className={css.projectsContainer}>
        <h1 className={css.pageTitle}>Réalisations</h1>
        <div className={css.projectsList}>
          {projects.map((p, i) => {
            return <Project key={p.slug} project={p} index={i}/>
          })}
        </div>
      </div>
    </PageWrapper>
  )
}
