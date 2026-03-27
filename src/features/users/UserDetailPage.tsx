import { Link, useParams } from 'react-router-dom';
import Badge from '../../components/Badge';
import Card from '../../components/Card';
import PageHeader from '../../components/PageHeader';
import { getUserById } from './data';

export default function UserDetailPage() {
  const { userId } = useParams<{ userId: string }>();
  const user = userId ? getUserById(userId) : undefined;

  if (!user) {
    return (
      <div className="mx-auto max-w-[1200px]">
        <PageHeader title="사용자 없음" />
        <Link
          to="/users"
          className="text-[var(--color-primary)] no-underline hover:underline"
        >
          목록으로
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1200px]">
      <PageHeader
        title={user.name}
        description={user.email}
        actions={
          <Link
            to="/users"
            className="text-[var(--color-primary)] no-underline hover:underline"
          >
            목록
          </Link>
        }
      />
      <Card title="상태">
        <Badge
          tone={
            user.status === 'active'
              ? 'success'
              : user.status === 'invited'
                ? 'warning'
                : 'neutral'
          }
        >
          {user.status}
        </Badge>
      </Card>
    </div>
  );
}
