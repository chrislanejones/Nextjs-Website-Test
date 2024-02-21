import NextAuth from "next-auth";
import Okta from "next-auth/providers/okta";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Okta({
      clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
      clientSecret: process.env.OKTA_OAUTH2_CLIENT_SECRET,
      issuer: process.env.OKTA_OAUTH2_ISSUER,
    }),
  ],
};

export default NextAuth(authOptions);
