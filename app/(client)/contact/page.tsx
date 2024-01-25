import { ContactForm } from '@/components/contact-form';
import { TypographyH1, TypographyH3, TypographyParagraph } from '@/components/typography';
import { getMenu } from '@/sanity/lib/client';
import { SocialIcon } from 'react-social-icons';

export default async function Contact() {
  const { items } = await getMenu('social-menu');

  return (
    <div className="max-w-5xl mx-auto grow flex items-center px-12 md:px-6 py-6 w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
        <div className="flex flex-col gap-4 justify-center">
          <TypographyH3 className="text-primary tracking-[10px]">Contact</TypographyH3>
          <TypographyH1>Got a problem to solve?</TypographyH1>
          <TypographyParagraph className="text-muted-foreground">
            I&apos;m always looking for new opportunities to work on exciting projects with great
            people. If you&apos;re interested in working with me, please get in touch!
          </TypographyParagraph>
          <ul className="flex gap-3">
            {items?.map((link) => (
              <li key={link._id}>
                <SocialIcon
                  fgColor="currentColor"
                  bgColor="transparent"
                  url={link.href}
                  target="_blank"
                  className="rounded-full hover:bg-accent transition-colors duration-300 text-muted-foreground"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-sm mx-auto w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
