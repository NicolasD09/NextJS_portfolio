'use client'
import { BLOCKS, NodeData, TopLevelBlock } from '@contentful/rich-text-types';
import { Asset, AssetFile, Entry, EntrySkeletonType } from 'contentful';
import { documentToReactComponents as renderElement } from '@contentful/rich-text-react-renderer';
import { Route } from '@/lib/router';
import Image from 'next/image';
import css from './Article.module.scss'
import cn from 'classnames'
import Link from 'next/link';
import ImageRenderer from '@/components/pages/Article/ImageRenderer';

type Document = { content: TopLevelBlock[], data: NodeData, nodeType: BLOCKS.DOCUMENT }

export type ArticleProps = {
  title: string,
  description: Document,
  content: Document,
  linkedItems?: ReadonlyArray<Entry<EntrySkeletonType<any>>>,
  linkedItemsTitle?: string,
  goBackButtonTitle: string,
  goBackButtonRoute: Route,
  assets?: Map<string, Asset>
}



const Article = ({
  title,
  description,
  content,
  linkedItems,
  linkedItemsTitle,
  goBackButtonTitle,
  goBackButtonRoute,
  assets
} : ArticleProps) => {
  const randInt = Math.floor(Math.random() * (10 - 1 + 1) + 1)
  const randImg = `/images/${randInt}.webp`;

  const renderElementOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        if(!assets) {
          return null;
        }
        const newNode = assets.get(node.data.target.sys.id)!;
        const file = newNode.fields.file! as AssetFile;

        return (
          <div className={css.imageContainer}>
            <ImageRenderer
              url={file.url}
              alt={String(newNode.fields?.title) ?? ''}
              className={css.image}
            />
          </div>
        );
      },
    }
  };

  return (
    <div className={css.articleWrapper}>
      <div className={cn('layoutWrapper', css.articleHeader)}>
        <h1 className={css.articleTitle}>{title}</h1>
        <div className={css.articleDescription}>{renderElement(description, renderElementOptions)}</div>
      </div>
      <div className={css.articleImage}>
        <Image
          src={randImg}
          alt={'Background image'}
          fill={true}
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={cn('layoutWrapper', css.article)}>
        <div className={css.articleContent}>{renderElement(content, renderElementOptions)}</div>
        {linkedItems && linkedItems.map(item => <span key={Math.random()}>{JSON.stringify(item)}</span>)}
        <p>{linkedItemsTitle}</p>
        <Link href={goBackButtonRoute}>{goBackButtonTitle}</Link>
        <p>{goBackButtonRoute}</p>
      </div>
    </div>
  )
}

export default Article;
