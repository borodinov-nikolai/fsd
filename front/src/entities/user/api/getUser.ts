import { emptySplitApi } from "@/shared/api/configs/rtk_query"




const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: ()=> '/users/me'
    }),
  }),
  overrideExisting: false,
})

export const { useGetUserQuery } = extendedApi
