import { getSkills } from '@/api/skill';
import Navbar from '@/components/Navbar/Navbar';
import { getAllProjects } from '@/api/projects';
import css from './style.module.scss'
import { Project } from '@/components/ProjectsSection/Project';

export default async function Page(){
  const allSkills = await getSkills();
  const projects = await getAllProjects();
  
  return (
    <>
      <Navbar skills={allSkills} projects={projects}/>
      <div className={css.projectsContainer}>
        <h1 className={css.pageTitle}>Réalisations</h1>
        <div className={css.projectsList}>
          {projects.map((p, i) => {
            return <Project key={p.slug} project={p} index={i}/>
          })}
        </div>
      </div>
    </>
  )
}
