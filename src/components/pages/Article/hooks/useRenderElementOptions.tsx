import { Asset, AssetFile } from 'contentful';
import { BLOCKS } from '@contentful/rich-text-types';
import css from '@/components/pages/Article/Article.module.scss';
import ImageRenderer from '@/components/pages/Article/ImageRenderer';
import { useMemo } from 'react';

const useRenderElementOptions = () => {
  return useMemo(() => ({
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const fields = node.data.target.fields;
        const file = fields.file as AssetFile;

        return (
          <div className={css.imageContainer}>
            <ImageRenderer
              url={file.url}
              alt={String(fields.title) ?? ''}
              className={css.image}
            />
          </div>
        );
      },
    }
  }), []);
}

export default useRenderElementOptions;
