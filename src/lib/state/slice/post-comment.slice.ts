import { AUTH_COOKIE_NAME } from "@lib/constants";
import { baseApiService } from "../base-api-service";
import { getCookie } from "@lib/utils";

export const PostCommentSlice = baseApiService.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<any, void>({
      query: () => {
        const idToken = getCookie(AUTH_COOKIE_NAME);
        const url = `${process.env.NEXT_PUBLIC_NEXT_PUBLIC_AUTH_BASE_API_URL}/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY}`;
        return {
          url,
          body: {
            idToken,
          },
          method: "POST",
        };
      },
    }),
  }),
});

export const { useGetCurrentUserQuery } = PostCommentSlice;
