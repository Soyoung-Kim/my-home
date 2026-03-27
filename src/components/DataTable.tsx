import type { ReactNode } from 'react';

export type Column<T> = {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
};

type Props<T> = {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
};

export default function DataTable<T>({ columns, rows, rowKey }: Props<T>) {
  return (
    <div className="card-base overflow-auto">
      <table className="w-full border-collapse text-[0.95rem] [&_tbody_tr:last-child_td]:border-b-0">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="border-b border-[var(--color-border)] bg-slate-50 px-4 py-2.5 text-left font-semibold text-slate-600"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={rowKey(row)}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="border-b border-[var(--color-border)] px-4 py-2.5 text-left"
                >
                  {col.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
