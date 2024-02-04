import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import { Asset } from 'contentful';
import useRenderElementOptions from '@/components/pages/Article/hooks/useRenderElementOptions';


const useRenderDocument = (assets: Map<string, Asset> | undefined = undefined) => {
  const options = useRenderElementOptions(assets)
  const renderElement = (document: Document) => {
    return documentToReactComponents(document, options)
  }

  return {
    renderElement
  }
}

export default useRenderDocument;
