import { Page } from '@/lib/zod/page';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import FormattedText from './formatted-text';
import RevealInView from './reveal-in-view';
import { TypographyH2 } from './typography';

export default function About({ content }: { content: Page }) {
  return (
    <section className="max-w-5xl mx-auto w-full min-h-screen px-12 md:px-6 py-12 md:py-4 flex flex-col justify-center">
      <RevealInView>
        <TypographyH2>{content.title}</TypographyH2>
        <div className="grid grid-cols-1 mx-auto mt-9 md:grid-cols-3">
          <FormattedText className="col-span-2 pr-0 md:pr-5 pb-5 md:pb-0" content={content.body} />
          <Image
            src={urlForImage(content.image)}
            width={384}
            height={384}
            alt={content.image.alt}
            className="object-cover rounded-lg shadow-lg w-full h-auto"
            priority
          />
        </div>
      </RevealInView>
    </section>
  );
}
