// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { BASE_URL } from '../../shared/config/ConfigApi';
import { STATUS_TOAST } from '../../shared/const';
import { ERROR_TYPE } from '../../shared/const/error-type';
import { setToastMessage } from '../redux/store/ToastMessage';

// initialize an empty api service that we'll inject endpoints into later as needed
// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // BASE_URL
  prepareHeaders: (headers) => {
    // headers.set('Content-Type', 'application/json; charset=utf-8');
    // headers.set('Accept', 'application/json, text/javascript, */*; q=0.01');
    headers.set('Access-Control-Allow-Origin', '*');

    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  },
  timeout: 60000
});
const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  //   if (result.error && result.error.status === 401) {
  //     // checking whether the mutex is locked
  //     if (!mutex.isLocked()) {
  //       const release = await mutex.acquire();
  //       try {
  //         // const refreshResult = await baseQuery('/refreshToken', api, extraOptions);
  //         // if (refreshResult.data) {
  //         //   api.dispatch(tokenReceived(refreshResult.data));
  //         //   // retry the initial query
  //         //   result = await baseQuery(args, api, extraOptions);
  //         // } else {
  //         //   api.dispatch(loggedOut());
  //         // }
  //       } finally {
  //         // release must be called once the mutex should be released again.
  //         release();
  //       }
  //     } else {
  //       // wait until the mutex is available without locking it
  //       await mutex.waitForUnlock();
  //       result = await baseQuery(args, api, extraOptions);
  //     }
  //   }
  console.log('result', result);
  if (result.error) {
    api.dispatch(
      setToastMessage({ status: STATUS_TOAST.ERROR, message: ERROR_TYPE?.[result.error.status] || '' })
    );
  }
  return result;
};
export const baseApi = createApi({
  baseQuery: baseQueryWithReAuth,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  keepUnusedDataFor: 10,
  refetchOnMountOrArgChange: 10,
  endpoints: () => ({})
});
