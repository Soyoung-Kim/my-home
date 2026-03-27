import type { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  title?: string;
};

export default function Card({ children, title, className = '', ...rest }: Props) {
  return (
    <div className={`card-base overflow-hidden ${className}`.trim()} {...rest}>
      {title ? (
        <div className="border-b border-[var(--color-border)] bg-slate-50 px-4 py-3 font-semibold text-slate-800">
          {title}
        </div>
      ) : null}
      <div className="p-4">{children}</div>
    </div>
  );
}
