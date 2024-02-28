import { BLOCKS } from '@contentful/rich-text-types';
import { renderDocumentAsset } from '@/components/pages/Article/hooks/utils';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderDocumentAsset(),
  }
};
const useRenderElementOptions = () => {
  return options;
}

export default useRenderElementOptions;
