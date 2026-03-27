import DataTable, { type Column } from '../../components/DataTable';
import PageHeader from '../../components/PageHeader';
import type { ProjectAccess } from './data';
import { projectAccess } from './data';

const columns: Column<ProjectAccess>[] = [
  { key: 'name', header: '프로젝트', render: (p) => p.name },
  { key: 'roleGroup', header: '역할 그룹', render: (p) => p.roleGroup },
];

export default function ProjectPermissionsPage() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <PageHeader
        title="프로젝트 권한"
        description="프로젝트별 역할 그룹 매핑"
      />
      <DataTable
        columns={columns}
        rows={projectAccess}
        rowKey={(p) => p.projectId}
      />
    </div>
  );
}
