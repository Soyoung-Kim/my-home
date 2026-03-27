import Card from './Card';

type Props = {
  label: string;
  value: string | number;
  hint?: string;
};

export default function MetricCard({ label, value, hint }: Props) {
  return (
    <Card>
      <div className="metric-card">
        <div className="metric-card__label">{label}</div>
        <div className="metric-card__value">{value}</div>
        {hint ? <div className="metric-card__hint">{hint}</div> : null}
      </div>
    </Card>
  );
}
