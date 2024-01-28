import { Page } from "@/lib/zod/page";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import FormattedText from "./formatted-text";
import { TypographyH2 } from "./typography";
import SectionContainer from "./ui/section-container";

export default function About({ content }: { content: Page }) {
  return (
    <SectionContainer>
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
          className="h-auto w-full rounded-lg object-cover shadow-lg"
          priority
        />
      </div>
    </SectionContainer>
  );
}
