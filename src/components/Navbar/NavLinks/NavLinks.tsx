import css from './NavLinks.module.scss'
export const NavLinks = () => {
  return (
    <div className={css.navLinksContainer}>
      <span>Compétences</span>
      <span>Projets</span>
      <span>Contact</span>
    </div>
  )
}
