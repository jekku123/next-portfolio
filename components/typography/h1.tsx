import { cn } from '@/lib/utils';

export function TypographyH1({ children, className }: TypographyProps) {
  return <h1 className={cn('text-3xl font-bold scroll-m-20', className)}>{children}</h1>;
}
