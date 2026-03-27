import { Link, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import PermissionMatrix from './PermissionMatrix';
import { getRoleGroupById } from './data';

export default function RoleGroupDetailPage() {
  const { groupId } = useParams<{ groupId: string }>();
  const group = groupId ? getRoleGroupById(groupId) : undefined;

  if (!group) {
    return (
      <div className="page">
        <PageHeader title="그룹 없음" />
        <Link to="/role-groups" className="link">
          목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <PageHeader
        title={group.name}
        description={`멤버 ${group.memberCount}명`}
        actions={
          <Link to="/role-groups" className="link">
            목록
          </Link>
        }
      />
      <Card title="권한 매트릭스">
        <PermissionMatrix />
      </Card>
    </div>
  );
}
