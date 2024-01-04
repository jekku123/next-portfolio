import { PostTeaser as PostTeaserType } from '@/lib/zod/post-teaser';
import { PostTeaser } from './post-teaser';

interface PostTeasersProps {
  posts?: PostTeaserType[];
  heading?: string;
}

export function PostTeasers({ posts, heading }: PostTeasersProps) {
  return (
    <>
      {/* <TypographyH2>{heading}</TypographyH2> */}
      <ul className="grid max-w-5xl grid-cols-1 mx-auto mt-6 gap-9 sm:grid-cols-2 md:grid-cols-3">
        {posts?.map((post) => (
          <li key={post._id}>
            <PostTeaser post={post} />
          </li>
        ))}
      </ul>
      {/* <div className="flex items-center justify-center">
        {!posts?.length && <p className="py-4">No posts found</p>}
        {posts?.length && (
          <LinkButton href="/blog" className="inline-flex px-5 py-3 mt-4 mr-4 text-base">
            All posts
          </LinkButton>
        )}
      </div> */}
    </>
  );
}
