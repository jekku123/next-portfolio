import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariants = cva(
  'block pt-2.5 pb-1 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors duration-300',
  {
    variants: {
      variant: {
        default:
          'text-primary-foreground border-border hover:border-input focus:border-primary-accent',
        secondary:
          'text-foreground border-primary-100 focus:border-primary-400 hover:border-primary-200',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const labelVariants = cva(
  'absolute text-sm duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto',
  {
    variants: {
      variant: {
        default: 'text-primary-foreground peer-focus:text-primary-foreground',
        secondary: 'text-foreground peer-focus:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface TextfieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants & typeof labelVariants> {
  label: string;
}

const Textfield = React.forwardRef<HTMLInputElement, TextfieldProps>(
  ({ className, variant, type = 'text', label, ...props }, ref) => {
    return (
      <div className="relative z-0">
        <input
          type={type}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
          placeholder=" "
          id={label}
        />
        <label htmlFor={label} className={cn(labelVariants({ variant }))}>
          {label}
        </label>
      </div>
    );
  }
);

Textfield.displayName = 'Textfield';

export { Textfield };
