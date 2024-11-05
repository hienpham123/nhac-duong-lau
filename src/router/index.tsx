import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GuestGuard from '../components/GuestGuard';
import MainLayout from '../components/layouts/MainLayout';
import ROUTERS_PATHS from '../shared/constants/router-path';

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
  <Suspense>
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
);
const routes: IRoutesState[] = [
  //   {
  //     exact: true,
  //     path: ROUTERS_PATHS.NOT_FOUND,
  //     component: lazy(() => import("pages/NotFoundView")),
  //   },
  //   {
  //     exact: true,
  //     path: ROUTERS_PATHS.AUTHORIZATION,
  //     component: lazy(() => import("pages/AuthorizationView")),
  //   },
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
    ]
  }
];

export default routes;
