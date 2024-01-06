import { PartialSkill } from '@/api/skill';
import * as Dd from '@radix-ui/react-dropdown-menu'
import css from './SkillsMenuList.module.scss'
import Link from 'next/link';
import Routes from '@/lib/router';

type SkillsMenuListProps = {
  skills: PartialSkill[],
  title: string
}

const SkillsMenuList = ({ skills, title }: SkillsMenuListProps) => {
  return (
    <div>
      <Dd.Label className={css.menuListTitle}>{title}</Dd.Label>
      <Dd.Group className={css.menuListGroup}>
        {
          skills.map(skill => (
            <Link key={skill.slug + Math.floor(Math.random() * 12354)} href={`${Routes.SKILLS}/${skill.slug}`} replace>
              <Dd.Item key={skill.slug} className={css.menuListItem}>{skill.title.toUpperCase()}</Dd.Item>
            </Link>
          ))
        }
      </Dd.Group>
    </div>
  )
}

export default SkillsMenuList;
