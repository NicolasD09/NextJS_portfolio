import { createClient } from 'contentful';

require('dotenv').config()

const contentfulspaceid = process.env.CONTENTFUL_SPACE_ID ?? '';
const contentfultoken = process.env.CONTENTFUL_TOKEN ?? '';

export const client = createClient({
  space: contentfulspaceid,
  accessToken: contentfultoken,
});

export const requestOptions: Partial<RequestInit> = {
  cache: 'no-store',
  headers: {
    'Cache-Control': 'private, max-age=0, must-revalidate',
    'CDN-Cache-Control': 'private, max-age=0, must-revalidate',
    'Vercel-CDN-Cache-Control': 'private, max-age=0, must-revalidate',
  }
}

const contentfulApiURL = `https://cdn.contentful.com/spaces/${contentfulspaceid}/entries?access_token=${contentfultoken}`;

const contentTypeURL = (type: string) => {
  return `${contentfulApiURL}&content_type=${type}`
}

export const SKILLS_URL = contentTypeURL('skill');

export const PROJECTS_URL = contentTypeURL('project');

export const SELF_DESCRIPTION_URL = contentTypeURL('selfDescription')

export const getSkillForSlugURL = (slug: string) => {
  return `${SKILLS_URL}&fields.slug[match]=${slug}`
}

export const getProjectForSlugURL = (slug: string) => {
  return `${PROJECTS_URL}&fields.slug[match]=${slug}&limit=1`
}

export const getSelfDescriptionUrl = () => {
  return `${SELF_DESCRIPTION_URL}&order=sys.createdAt&limit=1`
}
