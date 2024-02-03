'use client'

import Image, { ImageLoader, ImageLoaderProps } from 'next/image';

type Props = {
  url: string;
  alt: string;
  className: string | undefined
}

const contentfulImageLoader: ImageLoader = ({ src }: ImageLoaderProps) => {
  return `${src}?q=100`;
}
const ImageRenderer = ({ url, alt, className }: Props) => {
  return <Image
    loader={contentfulImageLoader}
    src={url}
    alt={alt}
    fill={true}
    className={className}
  />
}

export default ImageRenderer;
