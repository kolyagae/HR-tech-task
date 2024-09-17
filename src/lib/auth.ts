import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
// import { LoginResponse, ProfileResponse, User } from "./types";
import { LoginResponse } from "./types";

import { LOGIN, REFRESH_TOKEN } from "@/graphql/mutations";
import { GET_PROFILE } from "@/graphql/queries";
import { createApolloClient } from "./apolloClient";
import { isTokenExpired } from "./isTokenExpired";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        const { email, password } = credentials;
        const client = createApolloClient();

        let cachedAccessToken: string | null = null;
        let cachedRefreshToken: string | null = null;

        let { data } = await client.mutate<LoginResponse>({
          mutation: LOGIN,
          variables: {
            email,
            password,
          },
        });

        if (data) {
          cachedAccessToken = data.login.access_token;
          cachedRefreshToken = data.login.refresh_token;
        }

        if (isTokenExpired(cachedAccessToken)) {
          const { data: refreshData } = await client.mutate({
            mutation: REFRESH_TOKEN,
            variables: {
              refreshToken: cachedRefreshToken,
            },
          });
          if (refreshData && refreshData.refreshToken) {
            cachedAccessToken = refreshData.refreshToken.access_token;
            cachedRefreshToken = refreshData.refreshToken.refresh_token;
          }
        }

        const profile = await client.query({
          query: GET_PROFILE,
          context: {
            headers: {
              Authorization: `Bearer ${cachedAccessToken}`,
            },
          },
        });

        user = {
          id: profile.data.myProfile.id,
          name: profile.data.myProfile.name,
          image: profile.data.myProfile.avatar,
        };

        if (!user) {
          throw new Error("User not found.");
        }

        console.log("user :>> ", user);
        return user;
      },
    }),
  ],
});
