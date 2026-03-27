import { NavLink } from 'react-router-dom';

const nav = [
  { to: '/dashboard', label: '대시보드' },
  { to: '/users', label: '사용자' },
  { to: '/role-groups', label: '역할 그룹' },
  { to: '/projects/permissions', label: '프로젝트 권한' },
  { to: '/audit', label: '감사 로그' },
  { to: '/simple', label: '간단 페이지' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">My Home</div>
      <nav className="sidebar__nav">
        {nav.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
            }
            end={to === '/dashboard'}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
