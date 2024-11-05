import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GuestGuard from '../components/GuestGuard';
import ROUTERS_PATHS from '../shared/constants/router-path';
import LoadingScreen from '../components/LoadingScreen';
import MainLayout from '../components/layouts/MainLayout';

interface IAuthGuardProps {
  children: React.ReactNode;
  routes: IRoutesState[];
}

interface IGuestGuardProps {
  children: React.ReactNode;
  routes: IRoutesState[];
}
export interface IRoutesState {
  exact?: boolean;
  path?: string;
  guard?: React.FC<IAuthGuardProps | IGuestGuardProps>;
  layout?: any;
  component?: any;
  routes?: IRoutesState[];
  role?: string;
}
export const renderRoutes = (routes: IRoutesState[]) => (
  <React.Fragment>

  <Suspense fallback={<LoadingScreen />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard routes={routes}>
                {/* <Permission role={route.role}> */}
                <Layout>{route.routes ? renderRoutes(route.routes) : <Component screenName={route.role} />}</Layout>
                {/* </Permission> */}
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
  </React.Fragment>

);
const routes: IRoutesState[] = [
  {
    guard: GuestGuard,
    path: ROUTERS_PATHS.LOGIN,
    component: lazy(() => import('../components/Login'))
  },
  {
    guard: GuestGuard,
    path: ROUTERS_PATHS.FORGOT_PASSWORD,
    component: lazy(() => import('../components/Login'))
  },
  {
    path: ROUTERS_PATHS.ALL,
    // guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        path: ROUTERS_PATHS.HOME,
        component: lazy(() => import('../components/Home/Home'))
      },
      {
        path: ROUTERS_PATHS.INFO,
        component: lazy(() => import('../components/MyInfo/MyInfo'))
      },
    ]
  }
];

export default routes;
