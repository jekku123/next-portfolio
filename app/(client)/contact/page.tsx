import { ContactForm } from '@/components/contact-form';
import { TypographyH1 } from '@/components/typography/h1';

export default function Contact() {
  return (
    <>
      <TypographyH1>Contact</TypographyH1>
      <div className="max-w-xs mx-auto">
        <ContactForm />
      </div>
    </>
  );
}
