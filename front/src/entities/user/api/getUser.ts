import { emptySplitApi } from "@/shared/api/configs/rtk_query"




const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: ()=>({
        url: '/users/me',
        prefetch: true,
        credentials: 'include'
      }),
      providesTags: ['User']
    })
  }),
  overrideExisting: false,
})

export const { useGetUserQuery } = extendedApi
