import NextAuth from "next-auth";
import OktaProvider from "next-auth/providers/okta";

const handler = NextAuth({
  providers: [
    OktaProvider({
      clientId: "",
      clientSecret: "",
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {},
});
export { handler as GET, handler as POST };
