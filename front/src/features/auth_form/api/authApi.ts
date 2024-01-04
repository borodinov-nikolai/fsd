import { emptySplitApi } from "@/shared/api/configs/rtk_query"







const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({

    registration: build.mutation({
      query({username, email, password}) {
        return {
          url: '/auth/local/register',
          credentials: "include",
          method: 'POST',
          body: {
            username,
            email,
            password
          }
         }  
      }
     
    }),

    authorization: build.mutation({
      query({identifier, password}: {identifier: string, password:string}) {
        return {
          url: '/auth/local',
          credentials: "include",
          method: 'POST',
          body: {
            identifier,
            password
          }

        }
      }
    })
  }),


  
  overrideExisting: false,
})

export const { useRegistrationMutation, useAuthorizationMutation } = extendedApi