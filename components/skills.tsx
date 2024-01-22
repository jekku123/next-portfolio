import { Skill } from '@/lib/zod/skill';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import ProgressBar from './progress-bar';
import RevealInView from './reveal-in-view';
import { TypographyH2 } from './typography';
import ScrollingNumber from './ui/scrolling-number';

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section className="max-w-5xl mx-auto w-full min-h-screen px-12 md:px-6 py-4 flex flex-col justify-center">
      <RevealInView>
        <TypographyH2>Skills</TypographyH2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-3xl w-full mx-auto gap-10 mt-9">
          {skills.map((skill) => (
            <div key={skill._id} className="flex flex-col items-center justify-center gap-2">
              {skill?.logo && (
                <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] h-20 w-20"
                  src={urlForImage(skill.logo)}
                  alt="hehe"
                  width={180}
                  height={180}
                  priority
                />
              )}
              <p>{skill.title}</p>
              <ProgressBar value={skill.progress} />
              <div className="flex items-center justify-center gap-1">
                <ScrollingNumber initialValue={0} maxValue={skill.progress} />
                <span>%</span>
              </div>
            </div>
          ))}
        </div>
      </RevealInView>
    </section>
  );
}
