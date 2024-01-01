import { cn } from '@/lib/utils';

export function TypographyH3({ children, className }: TypographyProps) {
  return <h3 className={cn('text-lg font-bold scroll-m-20', className)}>{children}</h3>;
}
