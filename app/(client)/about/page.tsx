import FormattedText from '@/components/formatted-text';
import { TypographyH1 } from '@/components/typography';

import { Page } from '@/lib/zod/page';
import { getAboutPage } from '@/sanity/lib/client';

export const revalidate = 60;

export default async function About() {
  const content: Page = await getAboutPage();
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 w-full">
      <TypographyH1>{content.title}</TypographyH1>
      <FormattedText className="mt-9" content={content.body} />
    </div>
  );
}
