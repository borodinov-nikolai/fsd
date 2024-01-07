import { emptySplitApi } from "@/shared/api/configs/rtk_query";

interface IUser {
  id: number;
  username: string;
  name: string;
  phone_number: string;
  birthday: string;
  email: string;
  legal_entity: boolean;
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<IUser, null>({
      query: () => ({
        url: "/users/me",
        prefetch: true,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetUserQuery } = extendedApi;
