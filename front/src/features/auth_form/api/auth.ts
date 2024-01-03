import { emptySplitApi } from "@/shared/api/configs/rtk_query"



interface UserData {

    jwt: string,
    user: any
  
}

interface Body {

  username: string,
  email: string,
  password: string
}



const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    regiter: build.mutation<UserData, Body>({
      query({username, email, password}) {
        return {
          url: '/auth/local/register',
          method: 'POST',
          body: {
            username,
            email,
            password
          }
         }  
      }
     
    }),
  }),
  overrideExisting: false,
})

export const { useRegiterMutation } = extendedApi