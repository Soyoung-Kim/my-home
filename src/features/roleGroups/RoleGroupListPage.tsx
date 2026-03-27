import { Link } from 'react-router-dom';
import DataTable, { type Column } from '../../components/DataTable';
import PageHeader from '../../components/PageHeader';
import type { RoleGroup } from './data';
import { roleGroups } from './data';

const columns: Column<RoleGroup>[] = [
  { key: 'name', header: '그룹', render: (g) => g.name },
  { key: 'memberCount', header: '멤버 수', render: (g) => g.memberCount },
  {
    key: 'actions',
    header: '',
    render: (g) => (
      <Link to={`/role-groups/${g.id}`} className="link">
        상세
      </Link>
    ),
  },
];

export default function RoleGroupListPage() {
  return (
    <div className="page">
      <PageHeader title="역할 그룹" description="권한 묶음" />
      <DataTable columns={columns} rows={roleGroups} rowKey={(g) => g.id} />
    </div>
  );
}
