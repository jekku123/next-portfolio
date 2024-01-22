import { Page } from '@/lib/zod/page';
import FormattedText from './formatted-text';
import { TypographyH2 } from './typography';

export default function About({ content }: { content: Page }) {
  return (
    <section className="max-w-5xl mx-auto w-full min-h-screen px-12 md:px-6 py-4 flex flex-col justify-center">
      <TypographyH2>{content.title}</TypographyH2>
      <FormattedText className="mt-9" text={content.body} />
    </section>
  );
}
