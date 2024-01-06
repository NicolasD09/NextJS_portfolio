import { createClient } from 'contentful';
require ('dotenv').config()

const contentfulspaceid = process.env.CONTENTFUL_SPACE_ID ?? '';
const contentfultoken = process.env.CONTENTFUL_TOKEN ?? '';

export const client = createClient({
  space: contentfulspaceid,
  accessToken: contentfultoken,
});
