import { createClient } from 'contentful';

require('dotenv').config()

const contentfulspaceid = process.env.CONTENTFUL_SPACE_ID ?? '';
const contentfultoken = process.env.CONTENTFUL_TOKEN ?? '';

export const client = createClient({
  space: contentfulspaceid,
  accessToken: contentfultoken,
});

const contentfulApiURL = `https://cdn.contentful.com/spaces/${contentfulspaceid}/entries?access_token=${contentfultoken}`;
// https://cdn.contentful.com/spaces/7729j5m8keg2/entries?access_token=HVqix83mq5nuP6T0f5YWdXhfQdktiK__XC8DECOx-wM&content_type=skill&fields.slug[match]=api

export const getSkillsForSlugURL = (slug: string) => {
  return `${contentfulApiURL}&content_type=skill&fields.slug[match]=${slug}`
}

export const getSkillsURL = () => {
  return `${contentfulApiURL}&content_type=skill`
}
