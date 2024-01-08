import { AllSkills, PartialSkill } from '@/api/skill';
import SectionTitle from '@/components/SectionTitle';
import css from './style.module.scss'
import cn from 'classnames';
import Link from 'next/link';
import { getRouteForSkill } from '@/lib/router';

const SkillsList = ({ skills }: {skills: PartialSkill[]}) => {
  return (
    <div className={css.skillsList}>
      {
        skills.map(s => {
          return (
            <div key={''} className={css.skillLinkWrapper}>
              <Link href={getRouteForSkill(s)} key={s.slug} className={css.skillLink} >
                {s.title}
              </Link>
              <span className={css.skillType}>
              /{s.projectType}
              </span>
            </div>
          )
        })
      }
    </div>
  )
}
export const SkillsSection = async ({ skills }: { skills: AllSkills }) => {
  const { technicalSkills, humanSkills } = skills.skillsByType;
  return (
    <div className={
      cn(
        css.skillsSectionContainer
      )
    }>
      <SectionTitle title={'Compétences'} />
      <div className={css.skillsWrapper}>
        <SkillsList skills={technicalSkills} />
        <SkillsList skills={humanSkills} />
      </div>
    </div>
  )
}