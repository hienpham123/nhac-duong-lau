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
  <React.Fragment >

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
        path: ROUTERS_PATHS.PERSONAL_REPORT,
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
      {
        path: ROUTERS_PATHS.RECHARGE,
        component: lazy(() => import('../components/MyInfo/Recharge'))
      },
      {
        path: ROUTERS_PATHS.BANK_TRANSFER,
        component: lazy(() => import('../components/MyInfo/BankTransfer'))
      },
      {
        path: ROUTERS_PATHS.SYSTEM_NOTIFICATION,
        component: lazy(() => import('../components/SystemNotifications/SystemNotifications'))
      },
      {
        path: ROUTERS_PATHS.MONEY_LOG,
        component: lazy(() => import('../components/MoneyLog/Moneylog'))
      },
      {
        path: ROUTERS_PATHS.SERVICE_ONLINE,
        component: lazy(() => import('../components/ServiceOnline/ServiceOnline'))
      },
      {
        path: ROUTERS_PATHS.HISTORY_VOTE,
        component: lazy(() => import('../components/HistoryVote/HistoryVote'))
      },
      {
        path: ROUTERS_PATHS.SET_BANK,
        component: lazy(() => import('../components/Bank/Setbank'))
      },
      {
        path: ROUTERS_PATHS.BIND_CARD,
        component: lazy(() => import('../components/Bank/BindCard'))
      },
    ]
  }
];

export default routes;
