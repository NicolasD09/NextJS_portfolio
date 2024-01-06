import { client } from '@/lib/contentful';
import { EntryCollection, EntrySkeletonType } from 'contentful';
import { ISelfDescription } from '../../contentfulTypes';
export const getSelfDescription = async () => {
  // Get the first self description that has been created
  const response: EntryCollection<EntrySkeletonType<ISelfDescription>> = await client.getEntries({
    content_type: 'selfDescription',
    order: ['sys.createdAt'],
    limit: 1
  });

  return response.items[0].fields as ISelfDescription;
};
