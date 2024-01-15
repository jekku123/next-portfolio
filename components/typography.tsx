import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>
      {children}
    </h4>
  );
}

export function TypographyParagraph({ children, className }: TypographyProps) {
  return <p className={cn('leading-7 max-w-4xl mx-auto', className)}>{children}</p>;
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>
  );
}

export function TypographySmall({ children, className }: TypographyProps) {
  return <small className={cn('text-sm font-medium leading-none', className)}>{children}</small>;
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>;
}

export function TypographyLead({ children, className }: TypographyProps) {
  return <p className={cn('text-xl text-muted-foreground', className)}>{children}</p>;
}
