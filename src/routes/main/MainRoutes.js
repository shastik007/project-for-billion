import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>main</div>
  },
  {
    path: '/tour-agent',
    element: <div>tour-agency</div>
  },
  {
    path: '/seller',
    element: <div>seller</div>
  },
  {
    path: '/tourist',
    element: <div>tourist</div>
  }
]);
