import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './styles.css';
import { StrictMode } from 'react';
import 'jotai-devtools/styles.css';
import NotFoundPage from './components/Pages/NotFoundPage.tsx';
import PatientsPage from './components/Pages/PatientsPage.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DiseasesPage from './components/Pages/DiseasesPage.tsx';
import DiagnosesPage from './components/Pages/DiagnosesPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/patients',
    element: <PatientsPage />,
  },
  {
    path: '/diseases',
    element: <DiseasesPage />
  },
  {
    path: '/diagnoses',
    element: <DiagnosesPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
