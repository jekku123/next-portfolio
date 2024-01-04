import { ProjectTeaser, validateAndCleanupProjectTeaser } from '@/lib/zod/project-teaser';

import { createClient } from 'next-sanity';

import { Menu, validateAndCleanupMenu } from '@/lib/zod/menu';
import { Page, validateAndCleanupPage } from '@/lib/zod/page';
import { Post, validateAndCleanupPost } from '@/lib/zod/post';
import { PostTeaser, validateAndCleanupPostTeaser } from '@/lib/zod/post-teaser';
import { Project, validateAndCleanupProject } from '@/lib/zod/project';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getProjectTeasers(): Promise<ProjectTeaser[]> {
  const query = `*[_type == "project"]
  {
    _id,
    title,
    excerpt,
    github,
    liveSite,
    image,
    slug,
    technologies[]->{_id, title}
  }`;

  const projectTeasers = await client.fetch(query);
  const validatedProjectTeasers: ProjectTeaser[] = projectTeasers.map((project: any) =>
    validateAndCleanupProjectTeaser(project)
  );

  return validatedProjectTeasers;
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const query = `*[_type == "project" && slug.current == "${slug}"][0]
  {
    _id,
    title,
    body,
    github,
    liveSite,
    image,
    technologies[]->{_id, title}
  }`;

  const project = await client.fetch(query);
  const validatedProject = validateAndCleanupProject(project);

  if (!validatedProject) {
    throw new Error(`Project ${slug} not found`);
  }

  return validatedProject;
}

export async function getPostTeasers(): Promise<PostTeaser[]> {
  const query = `*[_type == "post"]
  {
    _id,
    title,
    excerpt,
    image,
    slug,
    _createdAt,
    tags[]->{_id, title}
  }`;

  const postTeasers = await client.fetch(query);

  const validatedPostTeasers: PostTeaser[] = postTeasers.map((post: any) =>
    validateAndCleanupPostTeaser(post)
  );

  return validatedPostTeasers;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]
  {
    _id,
    title,
    body,
    image,
    _createdAt,
    tags[]->{_id, title}
  }`;

  const post = await client.fetch(query);
  const validatedPost = validateAndCleanupPost(post);

  if (!validatedPost) {
    throw new Error(`Post ${slug} not found`);
  }

  return validatedPost;
}

export async function getAboutPage(): Promise<Page> {
  const query = `*[_type == "page" && slug.current == "about"][0]
  {
    _id,
    title,
    slug,
    body
  }`;

  const page = await client.fetch(query);
  const validatedPage = validateAndCleanupPage(page);

  if (!validatedPage) {
    throw new Error(`Page not found`);
  }

  return validatedPage;
}

export async function getSiteConfig(): Promise<any> {
  const query = `*[_type == "siteConfig"][0]
  {
    title,
    url,
    frontpage->{
      _id,
      title,
      slug,
    },
    mainNav->{
      _id, 
      title,
      slug,
      items[] {
        "_id": _key,
        text,
        "newTab": navigationItemUrl.isExternal,
        'href': select(
          navigationItemUrl.isExternal => navigationItemUrl.externalUrl,
          navigationItemUrl.internalLink->slug.current
        )
      }
    },
    socialNav->{
      _id,
      title,
      slug,
      items[] {
        "_id": _key,
        text,
        "newTab": navigationItemUrl.isExternal,
        "href": select(
          navigationItemUrl.isExternal => navigationItemUrl.externalUrl,
          navigationItemUrl.internalLink->slug.current
        )
      }
    }
  }`;

  const commonData = await client.fetch(query);

  return commonData;
}

export async function getMenu(slug: string): Promise<Menu> {
  const query = `*[_type == "navigation" && slug.current == "${slug}"][0] {
    _id,
    title,
    items[] {
      "_id": _key,
      text,
      "newTab": navigationItemUrl.isExternal,
      "href": select(
        navigationItemUrl.isExternal => navigationItemUrl.externalUrl,
        navigationItemUrl.internalLink->slug.current
        )
      }
    }`;

  const menu = await client.fetch(query);
  const validatedMenu = validateAndCleanupMenu(menu);

  if (!validatedMenu) {
    throw new Error(`Menu ${slug} not found`);
  }

  return validatedMenu;
}
