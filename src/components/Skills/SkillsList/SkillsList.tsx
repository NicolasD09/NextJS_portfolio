import { Skill as ISkill } from '../../../../contentfulTypes';
import css from './style.module.scss'
import Skill from '@/components/Skills/SkillsList/Skill';

type Props = {
  title: string;
  skills: ISkill[]
}

const SkillsList = ({ title, skills }: Props) => {
  return (
    <div className={css.skillsContainer}>
      <h2 className={css.title}>{title}</h2>
      <div className={css.skillsListContainer}>
        {
          skills.map(skill => <Skill key={skill.slug} skill={skill}/>)
        }
      </div>
    </div>
  )
}

export default SkillsList;
