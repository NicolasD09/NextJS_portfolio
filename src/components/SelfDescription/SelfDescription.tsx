import cn from 'classnames'
import css from './SelfDescription.module.scss'
import { getSelfDescription } from '@/api/selfDescription';
import me from '../../../public/me.png'
import Image from 'next/image';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import { Grid } from '@/components/UI';
import { SeeMore } from '@/components/UI/Button';
import Routes from '@/lib/router';

export const SelfDescription = async () => {
  const selfDescription = await getSelfDescription()

  return (
    <div className={cn('fullHeightFlexContainer')}>
      <div className={'layoutWrapper'}>
        <Grid>
          <Grid item colSpan={8} colStart={3} className={'flex items-center gap-12'}>
            <div className={cn(css.pictureWrapper)}>
              <Image className={cn(css.pictureWrapperImg)} src={me} alt={'Picture of me'}/>
            </div>
            <div className={css.descriptionWrapper}>
              <p className={cn(css.descriptionTitle)}>{selfDescription.title}</p>
              <div className={css.descriptionContentWrapper}>
                <p className={css.descriptionSubtitle}>{selfDescription.subtitle}</p>
                <>{renderElement(selfDescription.excerpt)}</>
                <SeeMore to={Routes.ABOUT_PAGE}/>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
