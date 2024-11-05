import { API_URL } from '../../shared/constants/api-url';
import { baseApi } from './api';

export const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: API_URL.LOGIN_ADMIN,
        method: 'POST',
        body: data
      })
    }),
    getCurrentUser: build.query({
      query: () => ({
        url: API_URL.GET_CURRENT_USER,
        method: 'GET'
      })
    })
  })
});

export const { useLoginMutation, useLazyGetCurrentUserQuery } = extendedApi;
