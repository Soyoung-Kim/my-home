import { useState } from 'react';
import { permissionMatrix } from './data';

export default function PermissionMatrix() {
  const [granted, setGranted] = useState<Record<string, boolean>>({});

  function toggleKey(resourceId: string, permId: string) {
    const key = `${resourceId}:${permId}`;
    setGranted((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="permission-matrix">
      <table className="permission-matrix__table">
        <thead>
          <tr>
            <th>리소스</th>
            {permissionMatrix[0]?.permissions.map((p) => (
              <th key={p.id}>{p.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissionMatrix.map((res) => (
            <tr key={res.id}>
              <td>{res.name}</td>
              {res.permissions.map((p) => {
                const key = `${res.id}:${p.id}`;
                const on = !!granted[key];
                return (
                  <td key={p.id}>
                    <input
                      type="checkbox"
                      aria-label={`${res.name} — ${p.label}`}
                      checked={on}
                      onChange={() => toggleKey(res.id, p.id)}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
