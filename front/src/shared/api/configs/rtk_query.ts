import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_CMS_API_URL, prepareHeaders: (headers)=> {
    const token = localStorage.getItem('token');
    if(token) {
      headers.set('Authorization', `Bearer ${token}` )
      return headers
    }
  } }),
  endpoints: () => ({}),
})