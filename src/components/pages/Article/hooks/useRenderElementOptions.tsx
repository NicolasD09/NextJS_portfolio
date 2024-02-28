import { BLOCKS } from '@contentful/rich-text-types';
import { AssetFile } from 'contentful';
import css from '@/components/pages/Article/Article.module.scss';
import ImageRenderer from '@/components/pages/Article/ImageRenderer';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
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
    }
  }
};
const useRenderElementOptions = () => {
  return options;
}

export default useRenderElementOptions;
