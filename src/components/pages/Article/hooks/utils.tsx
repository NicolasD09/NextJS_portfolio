import { Asset, AssetFile } from 'contentful';
import ImageRenderer from '@/components/pages/Article/ImageRenderer';

export const SimpleAsset = (node: Asset) => {
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
