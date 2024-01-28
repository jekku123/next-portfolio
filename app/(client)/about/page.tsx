import FormattedText from "@/components/formatted-text";
import { TypographyH2 } from "@/components/typography";
import { LinkButton } from "@/components/ui/link-button";

import { Page } from "@/lib/zod/page";
import { getAboutPage } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export const revalidate = 60;

export default async function About() {
  const content: Page = await getAboutPage();
  return (
    <div className="flex grow items-center">
      <div className="mx-auto max-w-5xl px-12 py-6 md:px-6">
        <TypographyH2>{content.title}</TypographyH2>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-3">
          <FormattedText
            className="col-span-2 pb-9 md:pb-0 md:pr-5"
            content={content.body}
          />
          <div className="flex flex-col gap-4">
            <Image
              src={urlForImage(content.image)}
              width={384}
              height={383}
              alt={content.image.alt}
              className="h-auto w-full rounded-lg object-cover shadow-lg"
              priority
            />
            <LinkButton variant="outline" href="/contact">
              Contact me
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
