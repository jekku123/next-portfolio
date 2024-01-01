import { cn } from '@/lib/utils';

export function TypographyH2({ children, className }: TypographyProps) {
  return <h2 className={cn('text-2xl font-bold scroll-m-20', className)}>{children}</h2>;
}
