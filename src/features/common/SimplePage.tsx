import PageHeader from '../../components/PageHeader';

export default function SimplePage() {
  return (
    <div className="page">
      <PageHeader title="페이지" description="플레이스홀더" />
      <p className="muted">요청한 경로에 대한 콘텐츠를 여기에 두면 됩니다.</p>
    </div>
  );
}
