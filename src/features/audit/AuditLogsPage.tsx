import PageHeader from '../../components/PageHeader';
import Timeline, { type TimelineItem } from '../../components/Timeline';

const items: TimelineItem[] = [
  {
    id: '1',
    time: '10:02',
    title: '로그인 성공',
    detail: 'user u1 · 203.0.113.10',
  },
  {
    id: '2',
    time: '09:41',
    title: '역할 그룹 변경',
    detail: 'rg2 권한 매트릭스 업데이트',
  },
  {
    id: '3',
    time: '09:15',
    title: '프로젝트 접근',
    detail: 'p2 읽기',
  },
];

export default function AuditLogsPage() {
  return (
    <div className="page">
      <PageHeader title="감사 로그" description="최근 활동" />
      <Timeline items={items} />
    </div>
  );
}
