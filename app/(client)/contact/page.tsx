import { ContactForm } from '@/components/contact-form';
import { TypographyH1 } from '@/components/typography';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-12 w-full">
      <TypographyH1>Contact</TypographyH1>
      <div className="max-w-xs mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
