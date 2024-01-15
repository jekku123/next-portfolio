import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyParagraph,
} from './typography';

interface FormattedTextProps {
  text: PortableTextBlock[];
  className?: string;
}

export default async function FormattedText({ text, className }: FormattedTextProps) {
  const components = {
    block: {
      h1: ({ children }: any) => <TypographyH1>{children}</TypographyH1>,
      h2: ({ children }: any) => <TypographyH2>{children}</TypographyH2>,
      h3: ({ children }: any) => <TypographyH3>{children}</TypographyH3>,
      h4: ({ children }: any) => <TypographyH4>{children}</TypographyH4>,
      normal: ({ children }: any) => (
        <TypographyParagraph className="[&:not(:first-child)]:mt-6">{children}</TypographyParagraph>
      ),
      blockquote: ({ children }: any) => <TypographyBlockquote>{children}</TypographyBlockquote>,
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
      ),
      number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="ml-4" style={{ listStyleType: 'disclosure-closed' }}>
          {children}
        </li>
      ),
    },
  };

  return (
    <div className={className}>
      <PortableText value={text} components={components} />
    </div>
  );
}
