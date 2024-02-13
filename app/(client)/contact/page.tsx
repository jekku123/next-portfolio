import { ContactForm } from "@/components/contact-form";
import {
  TypographyH1,
  TypographyH3,
  TypographyParagraph,
} from "@/components/typography";
import { getMenu } from "@/sanity/lib/client";
import { SocialIcon } from "react-social-icons";

export default async function Contact() {
  const { items } = await getMenu("social-menu");

  return (
    <div className="mx-auto flex min-h-[calc(100vh-140px)] max-w-5xl flex-col justify-center  px-12 py-6 md:px-6">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <TypographyH3 className="tracking-[10px] text-primary">
            Contact
          </TypographyH3>
          <TypographyH1>Got a problem to solve?</TypographyH1>
          <TypographyParagraph className="text-muted-foreground">
            I&apos;m always looking for new opportunities to work on exciting
            projects with great people. If you&apos;re interested in working
            with me, please get in touch!
          </TypographyParagraph>
          <ul className="flex gap-3">
            {items?.map((link) => (
              <li key={link._id}>
                <SocialIcon
                  fgColor="currentColor"
                  bgColor="transparent"
                  url={link.href}
                  target="_blank"
                  className="rounded-full text-muted-foreground transition-colors duration-300 hover:bg-accent"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="mx-auto flex w-full max-w-5xl grow items-center px-12 py-6 md:px-6">
  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
  <div className="flex flex-col justify-center gap-4">
    <TypographyH3 className="tracking-[10px] text-primary">
      Contact
    </TypographyH3>
    <TypographyH1>Got a problem to solve?</TypographyH1>
    <TypographyParagraph className="text-muted-foreground">
      I&apos;m always looking for new opportunities to work on exciting
      projects with great people. If you&apos;re interested in working
      with me, please get in touch!
    </TypographyParagraph>
    <ul className="flex gap-3">
      {items?.map((link) => (
        <li key={link._id}>
          <SocialIcon
            fgColor="currentColor"
            bgColor="transparent"
            url={link.href}
            target="_blank"
            className="rounded-full text-muted-foreground transition-colors duration-300 hover:bg-accent"
          />
        </li>
      ))}
    </ul>
  </div>
  <div className="mx-auto w-full max-w-sm">
    <ContactForm />
  </div>
</div>
</div> */
}
