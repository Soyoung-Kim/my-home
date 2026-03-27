import MetricCard from '../../components/MetricCard';
import PageHeader from '../../components/PageHeader';

export default function DashboardPage() {
  return (
    <div className="page">
      <PageHeader title="대시보드" description="요약 지표" />
      <div className="metric-grid">
        <MetricCard label="활성 사용자" value={128} hint="지난 7일" />
        <MetricCard label="역할 그룹" value={6} />
        <MetricCard label="오늘 감사 이벤트" value={42} />
      </div>
    </div>
  );
}
