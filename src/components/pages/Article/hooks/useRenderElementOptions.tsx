import { Asset, AssetFile } from 'contentful';
import { BLOCKS } from '@contentful/rich-text-types';
import css from '@/components/pages/Article/Article.module.scss';
import ImageRenderer from '@/components/pages/Article/ImageRenderer';
import { useMemo } from 'react';

const useRenderElementOptions = (assets: Map<string, Asset> | undefined) => {
  return useMemo(() => ({
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
  }), [assets]);
}

export default useRenderElementOptions;
