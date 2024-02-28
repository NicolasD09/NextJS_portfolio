'use client'

import Image, { ImageLoader, ImageLoaderProps, ImageProps } from 'next/image';

type Props = {
  alt: string;
}

const contentfulImageLoader: ImageLoader = ({ src }: ImageLoaderProps) => {
  return `${src}?q=100`;
}
const ImageRenderer = ({ alt, ...props }: Props & ImageProps) => {
  return <Image
    loader={contentfulImageLoader}
    alt={alt}
    {...props}
  />
}

export default ImageRenderer;
