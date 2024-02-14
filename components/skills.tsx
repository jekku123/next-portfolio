import { Skill } from "@/lib/zod/skill";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import ProgressBar from "./progress-bar";
import { TypographyH2 } from "./typography";
import ScrollingNumber from "./ui/scrolling-number";
import SectionContainer from "./ui/section-container";

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <SectionContainer>
      <TypographyH2>Skills</TypographyH2>
      <div className="mx-auto mt-9 grid w-full max-w-5xl grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </SectionContainer>
  );
}

export function Skill({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        className="h-20 w-20 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src={urlForImage(skill.logo)}
        alt={skill.logo.alt}
        width={180}
        height={180}
        priority
      />
      <p>{skill.title}</p>
      <ProgressBar value={skill.progress} />
      <div className="flex items-center justify-center gap-1">
        <ScrollingNumber initialValue={0} maxValue={skill.progress} />
        <span>%</span>
      </div>
    </div>
  );
}
