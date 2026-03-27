import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from '../layout/AppShell';
import AuditLogsPage from '../features/audit/AuditLogsPage';
import DashboardPage from '../features/common/DashboardPage';
import SimplePage from '../features/common/SimplePage';
import ProjectPermissionsPage from '../features/projects/ProjectPermissionsPage';
import RoleGroupDetailPage from '../features/roleGroups/RoleGroupDetailPage';
import RoleGroupListPage from '../features/roleGroups/RoleGroupListPage';
import UserDetailPage from '../features/users/UserDetailPage';
import UserListPage from '../features/users/UserListPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UserListPage />} />
        <Route path="users/:userId" element={<UserDetailPage />} />
        <Route path="role-groups" element={<RoleGroupListPage />} />
        <Route path="role-groups/:groupId" element={<RoleGroupDetailPage />} />
        <Route path="projects/permissions" element={<ProjectPermissionsPage />} />
        <Route path="audit" element={<AuditLogsPage />} />
        <Route path="simple" element={<SimplePage />} />
        <Route path="*" element={<SimplePage />} />
      </Route>
    </Routes>
  );
}
