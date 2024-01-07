import cn from 'classnames'
import css from './SelfDescription.module.scss'
import { getSelfDescription } from '@/api/selfDescription';
import me from '../../../public/me.png'
import Image from 'next/image';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import { Grid } from '@/components/UI';
import { SeeMore } from '@/components/UI/Button';
import { Route } from '@/lib/router';
import { Circle } from '@/components/UI/BlurredShapes';

export const SelfDescription = async () => {
  const selfDescription = await getSelfDescription()

  return (
    <div className={cn('fullHeightFlexContainer')}>
      <div className={'layoutWrapper'}>
        <Grid>
          <Grid item colStart={3} colSpan={8} className={'flex items-center gap-12'}>
            <div className={cn(css.pictureWrapper)}>
              <Image className={cn(css.pictureWrapperImg)} src={me} alt={'Picture of me'}/>
              <Circle color={'#DC6D02'} size={240} bottom={-230} left={-250}/>
              <Circle color={'#5714B0'} size={240} top={-130} left={-80}/>
            </div>
            <div className={css.descriptionWrapper}>
              <p className={cn(css.descriptionTitle)}>{selfDescription.title}</p>
              <div className={css.descriptionContentWrapper}>
                <p className={css.descriptionSubtitle}>{selfDescription.subtitle}</p>
                <>{renderElement(selfDescription.excerpt)}</>
                <SeeMore to={Route.ABOUT_PAGE}/>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
