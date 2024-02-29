import { BLOCKS } from '@contentful/rich-text-types';
import { AssetFile } from 'contentful';
import css from '@/components/pages/Article/Article.module.scss';
import ImageRenderer from '@/components/pages/Article/ImageRenderer';
import Link from 'next/link';
import { Route } from '@/lib/router';

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
    },
    ['entry-hyperlink']: (node: any) => {
      const contentType = node.data.target.sys.contentType.sys.id;
      const slug = node.data.target.fields.slug;
      const content = node.content[0].value;
      let URL;
      if(contentType === 'skill') {
        URL = `${Route.SKILLS}/${slug}`
      } else if(contentType === 'project') {
        URL = `${Route.PROJECTS}/${slug}`
      } else return null

      return (
        <Link href={URL} key={content} prefetch={false} target={'_blank'}>
          <span>{content}</span>
        </Link>
      )
    }
  }
};
const useRenderElementOptions = () => {
  return options;
}

export default useRenderElementOptions;
