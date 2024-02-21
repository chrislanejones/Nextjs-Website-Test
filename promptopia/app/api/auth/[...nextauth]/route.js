import NextAuth from "next-auth";
import Okta from "next-auth/providers/okta";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Okta({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      domain: process.env.OKTA_DOMAIN,
    }),
  ],
};

export default NextAuth(authOptions);
