import { ContactForm } from "@/components/contact-form";
import {
  TypographyH1,
  TypographyH2,
  TypographyParagraph,
} from "@/components/typography";
import { MenuItem } from "@/lib/zod/menu";
import SectionContainer from "./ui/section-container";
import SocialLinks from "./ui/social-links";

export interface MenuItems {
  items: MenuItem[];
}

export default async function ContactSection({ items }: MenuItems) {
  return (
    <SectionContainer>
      <TypographyH2 className="tracking-[10px]">Contact</TypographyH2>
      <div className="mt-9 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <TypographyH1>Got a problem to solve?</TypographyH1>
          <TypographyParagraph className="text-muted-foreground">
            I&apos;m always looking for new opportunities to work on exciting
            projects with great people. If you&apos;re interested in working
            with me, please get in touch!
          </TypographyParagraph>
          <SocialLinks items={items} />
        </div>
        <div className="mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
}
