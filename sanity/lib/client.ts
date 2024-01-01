import {
  ProjectTeaser as ProjectTeaserType,
  validateAndCleanupProjectTeaser,
} from '@/lib/zod/project-teaser';

import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getProjectTeasers(): Promise<ProjectTeaserType[]> {
  const query = `*[_type == "project"]
  {
    _id,
    title,
    excerpt,
    github,
    liveSite,
    image,
    "slug": slug.current,
    "technologies": technologies[]->{title, level}
  }`;

  const projectTeasers = await client.fetch(query);
  const validatedProjectTeasers = projectTeasers.map((project: any) =>
    validateAndCleanupProjectTeaser(project)
  );

  return validatedProjectTeasers;
}
