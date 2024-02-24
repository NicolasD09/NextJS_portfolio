import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';
import useRenderElementOptions from '@/components/pages/Article/hooks/useRenderElementOptions';


const useRenderDocument = () => {
  const options = useRenderElementOptions()
  const renderElement = (document: Document) => {
    return documentToReactComponents(document, options)
  }

  return {
    renderElement
  }
}

export default useRenderDocument;
