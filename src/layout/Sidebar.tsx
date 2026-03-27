import { NavLink } from 'react-router-dom';

const nav = [
  { to: '/dashboard', label: '대시보드' },
  { to: '/users', label: '사용자' },
  { to: '/role-groups', label: '역할 그룹' },
  { to: '/projects/permissions', label: '프로젝트 권한' },
  { to: '/audit', label: '감사 로그' },
  { to: '/simple', label: '간단 페이지' },
];

const linkBase =
  'block px-5 py-2 text-slate-300 no-underline transition-colors hover:bg-slate-700 hover:text-white';
const linkActive = 'border-r-[3px] border-sky-400 bg-slate-700 text-white';

export default function Sidebar() {
  return (
    <aside className="w-[220px] shrink-0 bg-slate-800 py-4 text-slate-200">
      <div className="mb-3 border-b border-slate-600 px-5 pb-4 text-lg font-bold">My Home</div>
      <nav className="flex flex-col gap-1">
        {nav.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
            end={to === '/dashboard'}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
