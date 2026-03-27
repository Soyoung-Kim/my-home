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
    <ul className="timeline">
      {items.map((item) => (
        <li key={item.id} className="timeline__item">
          <div className="timeline__time">{item.time}</div>
          <div className="timeline__body">
            <div className="timeline__title">{item.title}</div>
            {item.detail ? (
              <div className="timeline__detail">{item.detail}</div>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
