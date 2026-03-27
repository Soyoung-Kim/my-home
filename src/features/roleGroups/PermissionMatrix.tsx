import { useState } from 'react';
import { permissionMatrix } from './data';
import styles from './PermissionMatrix.module.css';

export default function PermissionMatrix() {
  const [granted, setGranted] = useState<Record<string, boolean>>({});

  function toggleKey(resourceId: string, permId: string) {
    const key = `${resourceId}:${permId}`;
    setGranted((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="overflow-x-auto">
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>리소스</th>
            {permissionMatrix[0]?.permissions.map((p) => (
              <th key={p.id} className={styles.th}>
                {p.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissionMatrix.map((res) => (
            <tr key={res.id}>
              <td className={styles.td}>{res.name}</td>
              {res.permissions.map((p) => {
                const key = `${res.id}:${p.id}`;
                const on = !!granted[key];
                return (
                  <td
                    key={p.id}
                    className={`${styles.td} ${styles.cell} ${on ? styles.checked : ''}`}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-white"
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
