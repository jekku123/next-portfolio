import "dotenv/config";

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-12-29";

export const dataset = assertValue(
  process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: SANITY_PROJECT_ID",
);

export const token = assertValue(
  process.env.SANITY_TOKEN || process.env.NEXT_PUBLIC_SANITY_TOKEN,
  "Missing environment variable: SANITY_API_WRITE_TOKEN",
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
