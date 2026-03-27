import type { HTMLAttributes, ReactNode } from 'react';

type Tone = 'neutral' | 'success' | 'warning' | 'danger';

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: Tone;
};

export default function Badge({
  children,
  tone = 'neutral',
  className = '',
  ...rest
}: Props) {
  return (
    <span
      className={`badge badge--${tone} ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  );
}
