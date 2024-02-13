import Image from "next/image";
import FormattedText from "./formatted-text";
import { TypographyH2 } from "./typography";
import { LinkButton } from "./ui/link-button";
import SectionContainer from "./ui/section-container";

export default function AboutSection({ content }: { content: any }) {
  return (
    <SectionContainer>
      <TypographyH2>Hello!</TypographyH2>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2 flex flex-col justify-between">
          <FormattedText
            className="col-span-2 pr-0 md:pr-5"
            content={content}
          />
          <div className="flex justify-start">
            <LinkButton href="/about" variant="secondary">
              More about me
            </LinkButton>
          </div>
        </div>
        <Image
          src="/pngegg.png"
          width={384}
          height={384}
          alt={"Hero image"}
          className="hidden rounded-lg object-cover shadow-lg md:flex"
          priority
        />
      </div>
    </SectionContainer>
  );
}
