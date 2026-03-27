export type RoleGroup = {
  id: string;
  name: string;
  memberCount: number;
};

export const roleGroups: RoleGroup[] = [
  { id: 'rg1', name: '관리자', memberCount: 3 },
  { id: 'rg2', name: '편집자', memberCount: 12 },
  { id: 'rg3', name: '뷰어', memberCount: 48 },
];

export function getRoleGroupById(id: string): RoleGroup | undefined {
  return roleGroups.find((g) => g.id === id);
}

export type Permission = { id: string; label: string };
export type Resource = { id: string; name: string; permissions: Permission[] };

export const permissionMatrix: Resource[] = [
  {
    id: 'proj',
    name: '프로젝트',
    permissions: [
      { id: 'read', label: '읽기' },
      { id: 'write', label: '쓰기' },
      { id: 'admin', label: '관리' },
    ],
  },
  {
    id: 'billing',
    name: '결제',
    permissions: [
      { id: 'read', label: '읽기' },
      { id: 'write', label: '쓰기' },
    ],
  },
];
