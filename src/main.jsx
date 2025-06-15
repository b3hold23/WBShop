import reactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/index.css'

import App from './App.jsx'
import ErrorPage from './Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  reactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}

