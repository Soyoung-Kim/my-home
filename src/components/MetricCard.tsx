import Card from './Card';

type Props = {
  label: string;
  value: string | number;
  hint?: string;
};

export default function MetricCard({ label, value, hint }: Props) {
  return (
    <Card>
      <div>
        <div className="text-sm text-muted">{label}</div>
        <div className="mt-1 text-3xl font-bold text-slate-900">{value}</div>
        {hint ? <div className="mt-1.5 text-xs text-slate-400">{hint}</div> : null}
      </div>
    </Card>
  );
}
