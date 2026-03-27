export type ProjectAccess = {
  projectId: string;
  name: string;
  roleGroup: string;
};

export const projectAccess: ProjectAccess[] = [
  { projectId: 'p1', name: '웹 클라이언트', roleGroup: '편집자' },
  { projectId: 'p2', name: 'API 서비스', roleGroup: '관리자' },
  { projectId: 'p3', name: '내부 도구', roleGroup: '뷰어' },
];
