import css from './style.module.scss'

type SectionTitleProps = {
  title: string;
}
const SectionTitle = ({
  title
}: SectionTitleProps) => {
  return (
    <div className={css.sectionTitleContainer}>
      <h2 className={css.sectionTitle}>{title}</h2>
      <span className={css.underline}></span>
    </div>
  )
}

export default SectionTitle;
