import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';

export default function App() {
  return (
    <BrowserRouter basename="{process.env.PUBLIC_URL}">
      <AppRoutes />
    </BrowserRouter>
  );
}
