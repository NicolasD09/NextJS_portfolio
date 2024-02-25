import { getSkills } from '@/api/skill';
import css from './style.module.scss'
import Grid from '@/components/UI/Grid/Grid';
import SkillsList from '@/components/Skills/SkillsList/SkillsList';
import PageWrapper from '@/components/Page/Page';


export default async function Page(){
  const allSkills = await getSkills()
  
  return (
    <PageWrapper>
      <div className={css.skillsContainer}>
        <h1 className={css.pageTitle}>Compétences</h1>
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
    </PageWrapper>
  )
}
