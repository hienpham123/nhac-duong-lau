import React, { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GuestGuard from '../components/GuestGuard';
import MainLayout from '../components/layouts/MainLayout';
import ROUTERS_PATHS from '../shared/constants/router-path';
import LoadingScreen from '../components/LoadingScreen';
import AuthGuard from '../components/AuthGuard';

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
                  <Layout>{route.routes ? renderRoutes(route.routes) : <Component screenName={route.role} />}</Layout>
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
    path: ROUTERS_PATHS.REGISTER,
    component: lazy(() => import('../components/Register'))
  },
  {
    guard: GuestGuard,
    path: ROUTERS_PATHS.FORGOT_PASSWORD,
    component: lazy(() => import('../components/Login'))
  },
  {
    path: ROUTERS_PATHS.ALL,
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        path: ROUTERS_PATHS.HOME,
        component: lazy(() => import('../components/Home/Home'))
      },
      {
        path: ROUTERS_PATHS.VOTE,
        component: lazy(() => import('../components/Vote'))
      },
      {
        path: ROUTERS_PATHS.INFO,
        component: lazy(() => import('../components/MyInfo/MyInfo'))
      },
      {
        path: ROUTERS_PATHS.SETTINGS,
        component: lazy(() => import('../components/MyInfo/Settings'))
      },
      {
        path: ROUTERS_PATHS.ACCOUNT_INFO1,
        component: lazy(() => import('../components/MyInfo/AccountInfo'))
      },
      {
        path: ROUTERS_PATHS.DETAILS,
        component: lazy(() => import('../components/Card/PeopleCardDetail'))
      },
      {
        path: ROUTERS_PATHS.CHOSEN_PEOPELE,
        component: lazy(() => import('../components/ChosenPeople/ChosenPeople'))
      },
      {
        path: ROUTERS_PATHS.CHOOSEN_PROVINCE,
        component: lazy(() => import('../components/ChosenPeople/ChooseProvince'))
      },
      {
        path: ROUTERS_PATHS.CHOOSEN_PROFILE,
        component: lazy(() => import('../components/ChosenPeople/Profile'))
      },
      {
        path: ROUTERS_PATHS.VIDEO,
        component: lazy(() => import('../components/WatchVideo/WatchVideo'))
      },
      {
        path: ROUTERS_PATHS.VIDEO_DETAIL,
        component: lazy(() => import('../components/WatchVideo/VideoContent'))
      },
    ]
  }
];

export default routes;
