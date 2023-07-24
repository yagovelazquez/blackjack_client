import { createBrowserRouter, Navigate } from 'react-router-dom';
import Auth from '../shared/auth/Auth';
import Layout from '../shared/components/layout/Layout';
import Login from './login/Login';
import Register from './register/Register';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'game',
        element: <Auth />,
        children: [{ path: 'ronaldo', element: <div></div> }],
      },
      { path: '*', element: <Navigate to={'login'} /> },
    ],
  },
]);
