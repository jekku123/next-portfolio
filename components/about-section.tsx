import { Skill as SkillType } from "@/lib/zod/skill";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { TypographyH2, TypographyH4, TypographyParagraph } from "./typography";
import { LinkButton } from "./ui/link-button";
import SectionContainer from "./ui/section-container";

type AboutSectionProps = {
  shortBio: string;
  skills: SkillType[];
};

export default function AboutSection({ shortBio, skills }: AboutSectionProps) {
  return (
    <SectionContainer>
      <div className="flex min-h-[calc(100vh-140px)] w-full flex-col justify-center">
        <TypographyH2>About me</TypographyH2>
        <div className="mt-9 grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 flex flex-col justify-between">
            <TypographyParagraph className="pr-0 md:pr-5">
              {shortBio}
            </TypographyParagraph>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
              <TypographyH4>Top Skills</TypographyH4>
              <div className="flex flex-wrap gap-6">
                {skills.map((skill) => (
                  <Image
                    key={skill._id}
                    className="h-12 w-12 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                    src={urlForImage(skill.logo)}
                    alt={skill.logo.alt}
                    width={180}
                    height={180}
                    priority
                  />
                ))}
              </div>
            </div>
            <div className="sm: mt-9 flex justify-center sm:justify-start">
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
      </div>
    </SectionContainer>
  );
}
