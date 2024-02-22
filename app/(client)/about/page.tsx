import FormattedText from "@/components/formatted-text";
import Skills from "@/components/skills";
import { TypographyH2 } from "@/components/typography";

import { getProfile, getSkills } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export const revalidate = 60;

export default async function About() {
  const skills = await getSkills();
  const profile = await getProfile();

  return (
    <div className="mx-auto mt-4 grid max-w-5xl">
      <div className="flex h-full min-h-[calc(100vh-140px)] w-full flex-col justify-center px-12 py-6 md:mt-0 md:px-6">
        <TypographyH2>About me</TypographyH2>
        <div className="mx-auto mt-9 grid grid-cols-1 md:grid-cols-3">
          <FormattedText
            className="col-span-2 pr-0 text-muted-foreground md:pr-5"
            content={profile.fullBio}
          />
          <div className="h-full w-full">
            <Image
              src={urlForImage(profile.image)}
              width={384}
              height={384}
              alt={profile.image.alt}
              className="hidden rounded-lg object-cover shadow-lg md:flex"
              priority
            />
            <div className="mt-4 flex items-center">
              <MapPin className="text-primary" />
              <span className="ml-2 text-muted-foreground">
                {profile.location}
              </span>
            </div>
            <div className="mt-2 flex items-center">
              <Mail className="text-primary" />
              <span className="ml-2 text-muted-foreground">
                {profile.email}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-[calc(100vh-140px)] w-full flex-col justify-center py-12 md:mb-0">
        <Skills skills={skills} />
      </div>
    </div>
  );
}
