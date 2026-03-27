import type { HTMLAttributes, ReactNode } from 'react';

type Tone = 'neutral' | 'success' | 'warning' | 'danger';

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: Tone;
};

const tones: Record<Tone, string> = {
  neutral: 'bg-slate-200 text-slate-700',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-900',
  danger: 'bg-red-100 text-red-800',
};

export default function Badge({
  children,
  tone = 'neutral',
  className = '',
  ...rest
}: Props) {
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold uppercase ${tones[tone]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  );
}
