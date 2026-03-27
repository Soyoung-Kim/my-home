export type User = {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'invited' | 'disabled';
};

export const users: User[] = [
  { id: 'u1', name: '김민준', email: 'minjun@example.com', status: 'active' },
  { id: 'u2', name: '이서연', email: 'seoyeon@example.com', status: 'invited' },
  { id: 'u3', name: '박도윤', email: 'doyun@example.com', status: 'disabled' },
];

export function getUserById(id: string): User | undefined {
  return users.find((u) => u.id === id);
}
