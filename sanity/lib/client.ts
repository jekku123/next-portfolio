import {
  ProjectTeaser,
  validateAndCleanupProjectTeaser,
} from "@/lib/zod/project-teaser";

import { createClient } from "@sanity/client";

import { Menu, validateAndCleanupMenu } from "@/lib/zod/menu";

import { Profile, validateAndCleanupProfile } from "@/lib/zod/profile";
import { Project, validateAndCleanupProject } from "@/lib/zod/project";
import { Skill, validateAndCleanupSkill } from "@/lib/zod/skill";
import { apiVersion, dataset, projectId, token, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: process.env.SANITY_API_WRITE_TOKEN || token,
});

export async function createSubmission(data: any) {
  const doc = {
    _type: "submission",
    ...data,
    receivedAt: new Date().toISOString(),
  };

  try {
    const response = await client.create(doc);
    return response;
  } catch (error: any) {
    console.error("Oh no, the update failed: ", error.message);
  }
}

export async function getProjectTeasers({
  limit = null,
}: {
  limit?: number | null;
} = {}): Promise<ProjectTeaser[]> {
  const query = `*[_type == "project"]|order(_createdAt desc)${limit ? `[0...${limit}]` : ""}
  {
    _id,
    title,
    excerpt,
    image,
    slug,
    techs[],
    tags[]
  }`;

  const projectTeasers = await client.fetch(query);
  const validatedProjectTeasers: ProjectTeaser[] = projectTeasers.map(
    (project: any) => validateAndCleanupProjectTeaser(project),
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
    techs[],
    tags[],
    carouselImages[]
  }`;

  const project = await client.fetch(query);

  const validatedProject = validateAndCleanupProject(project);

  if (!validatedProject) {
    throw new Error(`Project ${slug} not found`);
  }

  return validatedProject;
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

export async function getSkills({
  limit = null,
  order = "progress desc",
}: {
  limit?: number | null;
  order?: string;
} = {}) {
  const query = `*[_type == "skill"]${limit ? `|order(${order})[0...${limit}]` : ""} 
  {
    _id,
    title,
    logo,
    progress
  }`;

  const skills = await client.fetch(query);
  const validatedSkills: Skill[] = skills.map((skill: any) =>
    validateAndCleanupSkill(skill),
  );

  return validatedSkills;
}

export async function getProfile(): Promise<Profile> {
  const query = `*[_type == "profile"][0] {
    _id,
    fullName,
    headline,
    image,
    shortBio,
    fullBio,
    email,
    location,
  }`;

  const profile = await client.fetch(query);

  const validatedProfile = validateAndCleanupProfile(profile);

  if (!validatedProfile) {
    throw new Error(`Profile not found`);
  }

  return validatedProfile;
}
