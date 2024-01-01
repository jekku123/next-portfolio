import { cn } from '@/lib/utils';

import { VariantProps } from 'class-variance-authority';
import { ArrowRight } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import { buttonVariants } from './button';

interface LinkButtonProps extends LinkProps, VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
  newTab?: boolean;
}

export const LinkButton = ({
  variant = 'default',
  href,
  children,
  className,
  newTab = false,
  ...props
}: LinkButtonProps) => {
  const [target, rel] = newTab ? ['_blank', 'noreferrer'] : [];

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant }), 'group', className)}
      {...props}
      target={target}
      rel={rel}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="w-6 h-6 ml-3 transition-transform duration-500 group-hover:translate-x-2"
      />
    </Link>
  );
};
