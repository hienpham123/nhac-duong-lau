import React, { useEffect, useReducer } from 'react';
import SlashScreen from '../SplashScreen';
import Toast from '../Toast';
import { useLazyGetCurrentUserQuery } from '../services/authentication.service';

const ACTION_TYPE = {
  INITIALIZE: 'INITIALIZE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};
interface InitialAuthStateProps {
  isAuthenticated: boolean;
  isInitialized: boolean;
}

const initialAuthState: InitialAuthStateProps = {
  isAuthenticated: false,
  isInitialized: false
};

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case ACTION_TYPE.INITIALIZE: {
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user
      };
    }
    case ACTION_TYPE.LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user
      };
    }
    case ACTION_TYPE.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    }
    default: {
      return state;
    }
  }
};

const AuthContext = React.createContext({
  ...initialAuthState,
  login: (data: any) => Promise,
  logout: () => Promise
});

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const [getCurrentUser] = useLazyGetCurrentUserQuery();

  const login = async (data: any) => {
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('refreshToken', data.accessToken);
    let userInfo = null;

    try {
      if (data.accessToken) {
        userInfo = await getCurrentUser('').unwrap();
      }
    } catch (error) {
      localStorage.clear();
    } finally {
      dispatch({
        type: ACTION_TYPE.LOGIN,
        payload: {
          user: userInfo
        }
      });
    }
    return true;
  };

  const logout = () => {
    localStorage.clear();
    dispatch({ type: ACTION_TYPE.LOGOUT });
  };

  const initData = async () => {
    let token = localStorage.getItem('token');
    let userInfo: any = null;
    try {
      if (token) {
        userInfo = await getCurrentUser('').unwrap();
      }
    } catch (error) {
    } finally {
      setTimeout(() => {
        dispatch({
          type: ACTION_TYPE.INITIALIZE,
          payload: {
            isAuthenticated: Boolean(token && userInfo),
            // isAuthenticated: true,
            user: userInfo
          }
        });
      }, 200);
    }
  };

  useEffect(() => {
    initData();
    // eslint-disable-next-line
  }, []);

  if (!state.isInitialized) {
    return <SlashScreen />;
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          ...state,
          logout,
          login
        }}
      >
        {children}
      </AuthContext.Provider>
      <Toast />
    </>
  );
};

export default AuthContext;
