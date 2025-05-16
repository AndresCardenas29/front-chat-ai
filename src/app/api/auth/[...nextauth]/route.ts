import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulación: conecta a tu DB aquí
        const user = {
          id: "1",
          name: "Andrés",
          email: "andres@example.com",
          password: await bcrypt.hash("123456", 10), // Solo ejemplo
        };

        const isValid = await bcrypt.compare(credentials!.password, user.password);

        if (credentials?.email === user.email && isValid) {
          return { id: user.id, name: user.name, email: user.email };
        }

        return null; // Error de autenticación
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login", // puedes crear tu propia página
  },
});
export { handler as GET, handler as POST };