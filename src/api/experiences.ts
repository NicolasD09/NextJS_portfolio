import { fetch } from 'next/dist/compiled/@edge-runtime/primitives';
import { Experience } from '../../contentfulTypes';
import resolveResponse from 'contentful-resolve-response';
import { getExperienceForSlugURL, getExperiencesUrl, requestOptions } from '@/lib/contentful';
import { Entry } from 'contentful';

export const getAllExperiences = async (): Promise<Experience[]> => {
  const response = await fetch(getExperiencesUrl(), requestOptions)
    .then(r => r.json());

  return resolveResponse(response).map((t: Entry) => t.fields) as Experience[]
}

export const getExperienceBySlug = async (slug: string) => {
  const response = await fetch(getExperienceForSlugURL(slug), requestOptions)
    .then(r => r.json());

  return resolveResponse(response)[0].fields as Experience
}
