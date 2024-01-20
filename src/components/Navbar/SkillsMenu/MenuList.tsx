'use client'

import * as Dd from '@radix-ui/react-dropdown-menu'
import css from './SkillsMenuList.module.scss'
import Link from 'next/link';

type Item = {
  slug: string;
  title: string;
}

type SkillsMenuListProps = {
  items: Item[],
  title?: string,
  getRoute: (item: Item) => string;
}

const MenuList = ({ items, title, getRoute }: SkillsMenuListProps) => {
  console.log('items', items)
  return (
    <div>
      {
        title &&
      <Dd.Label className={css.menuListTitle}>{title}</Dd.Label>
      }
      <Dd.Group className={css.menuListGroup}>
        {
          items.map(item => (
            <Link
              key={'link_key_' + item.slug}
              href={getRoute(item)}
            >
              <Dd.Item
                key={'link_item_key_' + item.slug}
                className={css.menuListItem}>
                {item.title.toUpperCase()}
              </Dd.Item>
            </Link>
          ))
        }
      </Dd.Group>
    </div>
  )
}

export default MenuList;
