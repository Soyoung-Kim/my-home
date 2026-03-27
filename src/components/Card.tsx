import type { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  title?: string;
};

export default function Card({ children, title, className = '', ...rest }: Props) {
  return (
    <div className={`card ${className}`.trim()} {...rest}>
      {title ? <div className="card__title">{title}</div> : null}
      <div className="card__body">{children}</div>
    </div>
  );
}
