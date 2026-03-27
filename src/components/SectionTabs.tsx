import { NavLink } from 'react-router-dom';

export type TabItem = {
  to: string;
  label: string;
};

type Props = {
  tabs: TabItem[];
};

const tabBase =
  'rounded-md border border-transparent px-3 py-1.5 text-sm text-slate-500 no-underline transition-colors hover:text-slate-700';
const tabActive =
  'border-sky-200 bg-sky-50 text-[var(--color-primary)]';

export default function SectionTabs({ tabs }: Props) {
  return (
    <div className="mb-4 flex flex-wrap gap-2" role="tablist">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) => `${tabBase} ${isActive ? tabActive : ''}`}
          end
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
