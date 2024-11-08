import { API_URL } from "../../shared/constants/api-url";
import { baseApi } from "./api";

export const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPeoples: build.query({
      query: () => ({
        url: API_URL.PEOPLE,
        method: 'GET'
      })
    }),
    getPeopleDetail: build.query({
        query: (id) => ({
            url: `${API_URL.PEOPLE}/${id}`,
            method: 'GET'
        })
    })
  })
});

export const { useLazyGetPeoplesQuery, useLazyGetPeopleDetailQuery } = extendedApi;