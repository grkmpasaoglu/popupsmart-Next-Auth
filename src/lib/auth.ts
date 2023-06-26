import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Giriş",
      credentials: {
        email: {
          label: "E-mail",
          type: "email",
          placeholder: "ornek@email.com",
        },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return Promise.resolve(null);
        }

        const { email, password } = credentials;

        const allowedEmail = "grkm@gmail.com";
        const allowedPassword = "123";

        if (email === allowedEmail && password === allowedPassword) {
          const user = { id: "1", name: "Admin", email: email }; 
          console.log("Giriş başarılı.")
          return Promise.resolve(user);
        } 
        else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
};
