import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import useRenderElementOptions from '@/components/pages/Article/hooks/useRenderElementOptions';
import { renderDocumentAsset, SimpleAsset } from '@/components/pages/Article/hooks/utils';

const useRenderDocument = () => {
  const options = useRenderElementOptions()
  const renderElement = (document: Document | null | undefined) => {
    if (!document) return null
    return documentToReactComponents(document, options)
  }

  return {
    renderElement,
    renderAsset: renderDocumentAsset(),
    renderSimpleAsset: SimpleAsset
  }
}

export default useRenderDocument;
