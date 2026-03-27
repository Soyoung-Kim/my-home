import { Link } from 'react-router-dom';
import Badge from '../../components/Badge';
import DataTable, { type Column } from '../../components/DataTable';
import PageHeader from '../../components/PageHeader';
import type { User } from './data';
import { users } from './data';

const columns: Column<User>[] = [
  { key: 'name', header: '이름', render: (u) => u.name },
  { key: 'email', header: '이메일', render: (u) => u.email },
  {
    key: 'status',
    header: '상태',
    render: (u) => (
      <Badge
        tone={
          u.status === 'active'
            ? 'success'
            : u.status === 'invited'
              ? 'warning'
              : 'neutral'
        }
      >
        {u.status}
      </Badge>
    ),
  },
  {
    key: 'actions',
    header: '',
    render: (u) => (
      <Link
        to={`/users/${u.id}`}
        className="text-[var(--color-primary)] no-underline hover:underline"
      >
        상세
      </Link>
    ),
  },
];

export default function UserListPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <PageHeader title="사용자" description="계정 목록" />
      <DataTable columns={columns} rows={users} rowKey={(u) => u.id} />
    </div>
  );
}
