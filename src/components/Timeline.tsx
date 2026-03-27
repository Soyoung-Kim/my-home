import type { ReactNode } from 'react';

export type TimelineItem = {
  id: string;
  time: string;
  title: string;
  detail?: ReactNode;
};

type Props = {
  items: TimelineItem[];
};

export default function Timeline({ items }: Props) {
  return (
    <ul className="card-base m-0 list-none p-0">
      {items.map((item) => (
        <li
          key={item.id}
          className="grid grid-cols-[72px_1fr] gap-4 border-b border-[var(--color-border)] px-5 py-4 last:border-b-0"
        >
          <div className="text-sm text-slate-400">{item.time}</div>
          <div>
            <div className="font-semibold text-slate-900">{item.title}</div>
            {item.detail ? (
              <div className="mt-1 text-sm text-muted">{item.detail}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
