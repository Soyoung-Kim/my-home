import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary:
    'border border-transparent bg-[var(--color-primary)] text-white hover:brightness-110',
  secondary:
    'border border-[var(--color-border)] bg-white text-slate-700 hover:bg-slate-50',
  ghost: 'border border-transparent bg-transparent text-[var(--color-primary)] hover:bg-slate-100',
};

export default function ActionButton({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`cursor-pointer rounded-md px-3.5 py-1.5 text-[15px] font-[inherit] transition-colors ${variants[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
