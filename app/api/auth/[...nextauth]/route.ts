import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import prisma from "@/prisma/mipiPrismaClient";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = ({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials?.username
                    }
                })
                if(!credentials|| !user) {
                    return null;
                }
                const authUser = { id: String(user.id), username: user.username };
                const passwordIsValid = await bcrypt.compare(credentials.password, user.password);
                if (credentials.username === user.username && passwordIsValid) {
                    return authUser;
                }
                return null;
            },
        })
    ],
    pages: {
        signIn: "/auth/signin", // custom page
    },
    session: {
        strategy: "jwt", // use tokens, not DB
    },
    callbacks: {
        async jwt({ token, user }){
            if(user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token.user as any;
            return session;
        }
    }
});

const handler =  NextAuth(authOptions);
export { handler as GET, handler as POST };