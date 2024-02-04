import { getSkills } from '@/api/skill';
import Navbar from '@/components/Navbar/Navbar';
import { getAllProjects } from '@/api/projects';
import css from './style.module.scss'
import Grid from '@/components/UI/Grid/Grid';
import SkillsList from '@/components/Skills/SkillsList/SkillsList';

export default async function Page(){
  const allSkills = await getSkills()
  const projects = await getAllProjects();
  
  return (
    <>
      <Navbar skills={allSkills} projects={projects} />
      <div className={css.skillsContainer}>
        <Grid cols={2} className={css.skillsListContainer} >
          <Grid colSpan={2} mdColSpan={1} item>
            <SkillsList
              title={'Techniques'}
              skills={allSkills.skillsByType.technicalSkills}
            />
          </Grid>
          <Grid colSpan={2} mdColSpan={1} item>
            <SkillsList
              title={'Humaines'}
              skills={allSkills.skillsByType.humanSkills}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}
