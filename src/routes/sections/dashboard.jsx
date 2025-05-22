import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/app/tractor'));
const PageTwo = lazy(() => import('src/pages/app/two'));
const PageThree = lazy(() => import('src/pages/app/three'));
const PageFour = lazy(() => import('src/pages/app/four'));
const PageFive = lazy(() => import('src/pages/app/five'));
const PageSix = lazy(() => import('src/pages/app/six'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'app',
    // Always skip auth check for the dashboard routes
    element: <>{layoutContent}</>,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'two', element: <PageTwo /> },
      { path: 'three', element: <PageThree /> },
      {
        path: 'group',
        children: [
          { element: <PageFour />, index: true },
          { path: 'five', element: <PageFive /> },
          { path: 'six', element: <PageSix /> },
        ],
      },
    ],
  },
];
