import { getSelfDescriptionUrl, requestOptions } from '@/lib/contentful';
import { ISelfDescription } from '../../contentfulTypes';
export const getSelfDescription = async () => {
  const data = await fetch(getSelfDescriptionUrl(), requestOptions).then(resp => resp.json())

  return data.items[0].fields as ISelfDescription;
};
