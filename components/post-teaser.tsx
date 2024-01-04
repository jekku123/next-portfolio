import { formatDate } from '@/lib/utils';
import { PostTeaser } from '@/lib/zod/post-teaser';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

interface PostTeaserProps {
  post: PostTeaser;
}

export function PostTeaser({ post }: PostTeaserProps) {
  const date = formatDate(post._createdAt);

  return (
    <Link href={post.slug.current} className="grid h-full transition-all rounded-3xl group">
      {post.image && (
        <div className="mb-2 overflow-hidden aspect-w-16 aspect-h-10 rounded-xl">
          <div className="transition-transform duration-700 transform group-hover:scale-110">
            <Image
              src={urlForImage(post.image)}
              width={384}
              height={240}
              alt={post.image.alt}
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
        </div>
      )}
      <div className="flex flex-col h-full p-[3px]">
        <div className="mb-1 text-xs">
          <span className="font-bold">{date}</span>
          <span className="mx-2">|</span>
          <span className="uppercase">
            {post.tags.map((tag) => tag.title as string).join(', ')}
          </span>
        </div>
        <h3 className="mt-1 font-bold underline-offset-2 line-clamp-2 text-heading-xs text-secondary-foreground group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 leading-5">{post.excerpt}</p>
      </div>
    </Link>
  );
}
