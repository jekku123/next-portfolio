import { PostTeasers } from '@/components/post-teasers';
import { TypographyH1 } from '@/components/typography';
import { getPostTeasers } from '@/sanity/lib/client';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPostTeasers();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 w-full">
      <TypographyH1>Blog</TypographyH1>
      <PostTeasers posts={posts} />
    </div>
  );
}
