import cn from 'classnames'
import css from './SelfDescription.module.scss'
import { getSelfDescription } from '@/api/selfDescription';
import me from '../../../public/me.png'
import Image from 'next/image';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import { Grid } from '@/components/UI';
import { SeeMore } from '@/components/UI/Button';
import { Route } from '@/lib/router';

export const SelfDescription = async () => {
  const selfDescription = await getSelfDescription()

  return (
    <>
      <div className={'fullHeightFlexContainer hidden md:flex'}>
        <div className={'layoutWrapper'}>
          <Grid>
            <Grid
              item
              colStart={3}
              colSpan={8}
              mdColStart={2}
              mdColSpan={10}
              lgColStart={3}
              lgColSpan={8}
              className={'flex items-center gap-12'}>
              <div className={cn(css.pictureWrapper)}>
                <Image className={cn(css.pictureWrapperImg)} src={me} alt={'Picture of me'}/>
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
      <div className={'flex flex-col gap-4 px-5 my-12 md:hidden'}>
        <div className="flex gap-4">
          <Image className={cn(css.pictureWrapperImgMobile)} src={me} alt={'Picture of me'}/>
          <div className={'flex flex-col gap-2 justify-center'}>
            <p className={cn(css.descriptionTitle)}>{selfDescription.title}</p>
            <p className={css.descriptionSubtitle}>{selfDescription.subtitle}</p>
          </div>
        </div>
        <>{renderElement(selfDescription.excerpt)}</>
        <SeeMore to={Route.ABOUT_PAGE}/>
      </div>
    </>
  )
}
