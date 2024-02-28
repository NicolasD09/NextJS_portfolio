import { Asset, AssetFile } from 'contentful';
import css from '@/components/pages/Article/Article.module.scss';
import ImageRenderer from '@/components/pages/Article/ImageRenderer';

export const renderDocumentAsset = () => {
  return (node: any) => {
    const fields = node.data.target.fields;
    const file = fields.file as AssetFile;

    return (
      <div className={css.imageContainer}>
        <ImageRenderer
          src={file.url}
          fill={true}
          alt={String(fields.title) ?? ''}
          className={css.image}
        />
      </div>
    );
  };
}

export const renderSimpleAsset = (node: Asset) => {
  const file = node.fields.file as AssetFile;

  return (
    <ImageRenderer
      src={file.url}
      alt={String(node.fields.description) ?? ''}
      height={file.details.image?.height ?? 200}
      width={file.details.image?.width ?? 200}
    />
  );
}
