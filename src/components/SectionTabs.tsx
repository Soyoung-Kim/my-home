import { NavLink } from 'react-router-dom';

export type TabItem = {
  to: string;
  label: string;
};

type Props = {
  tabs: TabItem[];
};

export default function SectionTabs({ tabs }: Props) {
  return (
    <div className="section-tabs" role="tablist">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `section-tabs__tab${isActive ? ' section-tabs__tab--active' : ''}`
          }
          end
        >
          {tab.label}
        </NavLink>
      ))}
    </div>
  );
}
