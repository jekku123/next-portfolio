import FormattedText from "@/components/formatted-text";
import Skills from "@/components/skills";
import { TypographyH2 } from "@/components/typography";

import { Page } from "@/lib/zod/page";
import { getAboutPage, getSkills } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export const revalidate = 60;

export default async function About() {
  const content: Page = await getAboutPage();
  const skills = await getSkills();

  return (
    <div className="mx-auto mt-4 grid max-w-5xl ">
      <div className="flex h-full min-h-[calc(100vh-140px)] w-full flex-col justify-center px-12 py-6 md:mt-0 md:px-6">
        <TypographyH2>{content.title}</TypographyH2>
        <div className="mx-auto mt-9 grid grid-cols-1 md:grid-cols-3">
          <FormattedText
            className="col-span-2 pb-5 pr-0 md:pb-0 md:pr-5"
            content={content.body}
          />
          <Image
            src={urlForImage(content.image)}
            width={384}
            height={384}
            alt={content.image.alt}
            className="hidden rounded-lg object-cover shadow-lg md:flex"
            priority
          />
        </div>
      </div>
      <div className="mb-9 flex min-h-[calc(100vh-140px)] w-full flex-col justify-center md:mb-0">
        <Skills skills={skills} />
      </div>
    </div>
  );
}
