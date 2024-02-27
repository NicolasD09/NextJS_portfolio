import css from './style.module.scss'
import PageWrapper from '@/components/Page/Page';
import { getAllExperiences } from '@/api/experiences';
import Experience from '@/components/Experience/Experience';

export default async function Page(){
  const xp = await getAllExperiences();

  return (
    <PageWrapper>
      <div className={css.experiencesContainer}>
        <h1 className={css.pageTitle}>Mon parcours</h1>
        <div className={css.experiencesList}>
          {xp.map((xp) => {
            return <Experience experience={xp} key={xp.slug}/>
          })}
        </div>
      </div>
    </PageWrapper>
  )
}
