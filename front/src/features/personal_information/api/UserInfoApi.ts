import { emptySplitApi } from "@/shared/api/configs/rtk_query";

interface IUser {
  id: number;
  username: string;
  name: string;
  phone_number: string;
  birthday: string;
  email: string;
}

interface IQueryData {
  user_id?: number;
  body: {
    name?: string;
    phone_number?: string;
    email?: string;
    birthday?: string;
    legal_entity?: boolean;
  };
}

const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    putUserInfo: build.mutation<IUser, IQueryData>({
      query({ user_id, body }) {
        return {
          url: `/users/${user_id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { usePutUserInfoMutation } = extendedApi;
