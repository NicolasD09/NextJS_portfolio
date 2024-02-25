import Image from 'next/image';
import css from './BannerImage.module.scss'

const BannerImage = () => {
  const randInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
  const randImg = `/images/${randInt}.webp`;

  return (
    <div className={css.bannerImage}>
      <Image
        src={randImg}
        alt={'Background image'}
        fill={true}
        quality={100}
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default BannerImage;
