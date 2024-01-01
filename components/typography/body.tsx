import { cn } from '@/lib/utils';

export function TypographyBody({ children, className }: TypographyProps) {
  return (
    <p className={cn('text-md [&:not(:first-child)]:mt-4 mb-2 leading-md', className)}>
      {children}
    </p>
  );
}
