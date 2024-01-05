import { emptySplitApi } from "@/shared/api/configs/rtk_query"




const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    putUserInfo: build.mutation({
      query({id, body}: {id: number, body:{phone_number: string}}){
      
        return {
          url: `/users/${id}`,
          method: 'PUT',
          body
        }
       
      },
      invalidatesTags: ['User']
    })
  }),
  overrideExisting: false,
})

export const {usePutUserInfoMutation} = extendedApi
