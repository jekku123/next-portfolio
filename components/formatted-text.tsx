import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from 'sanity';

interface FormattedTextProps {
  text: PortableTextBlock[];
  className?: string;
}

export default async function FormattedText({ text, className }: FormattedTextProps) {
  const components = {
    block: {
      h1: ({ children }: any) => <h1 className="text-7xl">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-4xl">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl">{children}</h3>,
      blockquote: ({ children }: any) => (
        // eslint-disable-next-line react/no-unescaped-entities
        <blockquote className="italic">"{children}"</blockquote>
      ),
      normal: ({ children }: any) => (
        <p className="[&:not(:first-child)]:mt-4 mb-2 max-w-3xl mx-auto">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
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
